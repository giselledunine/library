import { Book } from "../entities/Book";
import { BookRepository } from "../repositories/bookRepository";

export interface FilterParams {
    author?: string;
    category?: string;
    available?: boolean;
    sortBy?: "title" | "publishedAt";
    sortOrder?: "asc" | "desc";
    page?: number;
    limit?: number;
}

export const filterBooks = async (
    filters: FilterParams,
    bookRepo: BookRepository
): Promise<{ data: Book[]; total: number }> => {
    const {
        author,
        category,
        available,
        sortBy = "title",
        sortOrder = "asc",
        page = 1,
        limit = 10,
    } = filters;

    const skip = (page - 1) * limit;
    const take = limit;

    const books = await bookRepo.findByFilter({
        author,
        category,
        available,
        sortBy,
        sortOrder,
        skip,
        take,
    });
    return books;
};
