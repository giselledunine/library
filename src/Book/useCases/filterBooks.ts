import { Books } from "../entities/Book";
import { BookRepository, BookSortField } from "../repositories/bookRepository";

export interface FilterBooksOptions {
    title?: string;
    page?: number;
    limit?: number;
    sortBy?: BookSortField;
    sortOrder?: "asc" | "desc";
}

export const filterBooks = async (
    filters: FilterBooksOptions,
    bookRepo: BookRepository
): Promise<{ data: Books[]; total: number }> => {
    const {
        //author,
        //category,
        //available,
        title,
        sortBy = "title",
        sortOrder = "asc",
        page = 1,
        limit = 10,
    } = filters;

    const skip = (page - 1) * limit;
    const take = limit;

    const books = await bookRepo.findByFilter({
        //author,
        //category,
        //available,
        title,
        sortBy,
        sortOrder,
        skip,
        take,
    });
    return books;
};
