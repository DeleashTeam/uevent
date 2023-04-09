import { Organization } from "@prisma/client";
import { Event } from "@prisma/client";
import prisma from "@/lib/prisma";
import TicketService from "../tickets/TicketService";

export interface ICloudinaryImage {
    url: string;
    public_id: string;
    signature: string;
}

export interface RetrieveAllOptions {
    organizationId?: string;
    tags?: string[];
    quantity?: number;
    sortBy: string;
    sortOrder: string;
    filter?: Filter;
}

export enum Filter {
    today = "today",
    upcoming = "upcoming",
    new = "new",
    specials = "specials",
}

export default class EventService {
    static async create(
        owner: Organization,
        name: string,
        description: string,
        startAt: Date,
        duration: number,
        images: ICloudinaryImage[],
        tickets: number,
        cost: { amount: number; currency: string },
        location: JSON,
        tags: string[]
    ) {
        const newEvent = await prisma.event.create({
            data: {
                name,
                description,
                images: images.map((image) => image.url),
                tickets,
                start_at: new Date(startAt),
                duration,
                // @ts-ignore
                cost,
                // @ts-ignore
                location,
                tags,
                image_ids: images.map((image) => image.public_id),
                image_signatures: images.map((image) => image.signature),
                organizationId: owner.id,
            },
        });
        return newEvent;
    }

    static async retrieveAll(
        options: RetrieveAllOptions = {
            sortBy: "created_at",
            sortOrder: "asc",
        }
    ): Promise<Event[]> {
        const { organizationId, tags, quantity, sortBy, sortOrder, filter } =
            options;
        const now = new Date();
        const todayStart = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate()
        );
        const todayEnd = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 1
        );

        let where: any = {
            organizationId,
            tags,
        };

        switch (filter) {
            case Filter.upcoming:
                where.start_at = { gte: now };
                break;
            case Filter.new:
                where.created_at = { gte: todayStart };
                break;
            case Filter.today:
                where.start_at = { gte: todayStart, lt: todayEnd };
        }

        const events = await prisma.event.findMany({
            take: quantity,
            where,
            include: { attendees: true },
            orderBy: { [sortBy]: sortOrder },
        });

        const serializedEvents = events.map((event) => ({
            ...event,
            start_at: event.start_at.toISOString(),
            created_at: event.created_at.toISOString(),
        }));
        // @ts-ignore
        return serializedEvents;
    }

    static async buyTickets(
        event: Event,
        buyerId: string,
        ticketsCount: number
    ) {
        const updatedEvent = await prisma.event.update({
            where: {
                id: event.id,
            },
            data: {
                tickets: event.tickets - ticketsCount,
            },
        });

        const ticketsPayload = await TicketService.createTickets(
            event.id,
            buyerId,
            ticketsCount
        );

        return {
            event: updatedEvent,
            ticketsCount: ticketsPayload.count,
        };
    }
}
