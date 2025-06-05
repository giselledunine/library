import { Books } from "../entities/Book";
import { BookRepository, BookSortField } from "../repositories/bookRepository";

export interface FilterGetAll {
    page?: number;
    limit?: number;
    sortBy?: BookSortField;
    sortOrder?: "asc" | "desc";
}

export const getAllBooks = async (
    filters: FilterGetAll,
    bookRepo: BookRepository
): Promise<{
    data: Books[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}> => {
    "use server";
    const {
        page = 1,
        limit = 10,
        sortBy = "title",
        sortOrder = "asc",
    } = filters;

    const skip = (page - 1) * limit;
    const take = limit;

    const books = await bookRepo.findAll({
        sortBy,
        sortOrder,
        skip,
        take,
    });
    return books;
};
