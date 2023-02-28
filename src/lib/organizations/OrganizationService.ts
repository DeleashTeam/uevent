import { Organization, User } from "@prisma/client";

export interface ICloudinaryImage {
    url: string,
    public_id: string,
    signature: string
}

export type UpdateParams = {
    name: string | null,
    description: string | null,
    image: ICloudinaryImage | null
}

type UpdateData = {
    name?: string;
    description?: string;
    image?: string;
    image_id?: string;
    image_signature?: string;
}

export default class OrganizationService {

    static async create(owner: User, name: string, description: string, image: ICloudinaryImage) {
        const newOrganization = await prisma.organization.create({
            data: {
                name,
                ownerId: owner.id,
                description,
                image: image.url,
                image_id: image.public_id,
                image_signature: image.signature
            }
        });

        return newOrganization;
    }

    static async update(organization: Organization, { name, description, image }: UpdateParams) {

        const data: UpdateData = {};

        if (name) data.name = name;
        if (description) data.description = description;

        if (image) {
            data.image = image.url;
            data.image_id = image.public_id;
            data.image_signature = image.signature;
        }


        const updateOrganization = await prisma.organization.update({
            where: {
                id: organization.id
            },
            data
        });



        return updateOrganization;

    }

    static async getUserOrganization(user: User | null) {
        if (!user) return null;

        return await prisma.organization.findFirst({
            where: {
                ownerId: user?.id
            },
            include: {
                owner: {
                    select: {
                        email: true
                    }
                }
            }
        });
    }

}