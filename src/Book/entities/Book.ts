import { Prisma } from "../../../prisma/src/generated/prisma";

export type Books = Prisma.BooksGetPayload<{
    include: {
        Authors: true;
        Deliveries: true;
    };
}>;

export type BooksWithUser = Prisma.BooksGetPayload<{
    include: {
        Authors: true;
        Deliveries: {
            include: {
                Users: true;
            };
        };
    };
}>;
