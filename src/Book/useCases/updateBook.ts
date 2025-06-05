import { Prisma } from "../../../prisma/src/generated/prisma";
import { BookRepository } from "../repositories/bookRepository";
import { BooksWithUser } from "../entities/Book";

export const updateBook = async (
    id: number,
    book: Prisma.BooksUpdateInput,
    bookRepo: BookRepository
): Promise<{ data: BooksWithUser | null } | null> => {
    "use server";

    const result = await bookRepo.update(id, book);
    console.log("result", result);
    return result;
};
