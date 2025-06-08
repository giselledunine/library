import { Prisma } from "@prisma/client";

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
