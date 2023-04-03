import EventService from "@/lib/events/EventService";
import { Event } from "@prisma/client";
import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";

const stripe = new Stripe(process.env.STRIPE_SECRET_API_KEY as string, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { id: eventId } = req.body;
    const event: Event | null = await EventService.retrieveOne(eventId);

    if (!event)
      return res
        .status(400)
        .json({ statuscode: "400", message: "Event not found" });

    try {
      const ownerAmount = Math.ceil(event.cost.amount * 0.1);
      console.log(formatAmountForStripe(ownerAmount, event.cost.currency));
      const creatorAmount = event.cost.amount - ownerAmount;

      const paymentIntent = await stripe.paymentIntents.create({
        amount: formatAmountForStripe(event.cost.amount, event.cost.currency),
        currency: event.cost.currency,
        payment_method_types: ["card"],
        transfer_group: event.id,
        transfer_data: {
          destination: "acct_1MsqS1CgkkY4q15N",
          amount: formatAmountForStripe(creatorAmount, event.cost.currency),
        },
        metadata: {
          owner_amount: ownerAmount,
          creator_amount: creatorAmount,
          event_id: event.id,
        },
      });

      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_intent_data: {
          application_fee_amount: formatAmountForStripe(
            ownerAmount,
            event.cost.currency
          ),
          transfer_data: {
            destination: "acct_1MsqS1CgkkY4q15N",
          },
        },
        success_url: "http://localhost:3000",
        cancel_url: "http://localhost:3000",
        line_items: [
          {
            price_data: {
              currency: event.cost.currency,
              product_data: {
                name: event.name,
              },
              unit_amount: event.cost.amount,
            },
            quantity: 1,
          },
        ],
      });

      res
        .status(200)
        .json({ client_secret: paymentIntent.client_secret, id: session.id });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Internal server error";
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
}

function formatAmountForStripe(amount: number, currency: string): number {
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency: boolean = true;
  for (let part of parts) {
    if (part.type === "decimal") {
      zeroDecimalCurrency = false;
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}
