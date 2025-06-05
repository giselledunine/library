import { Books, BooksWithUser } from "../entities/Book";
import { Prisma } from "../../../prisma/src/generated/prisma";

export type BookSortField = keyof Pick<
    Prisma.BooksOrderByWithRelationInput,
    "id" | "title" | "description" | "author"
>;

export interface FilterOptions {
    title?: string;
    // author?: string;
    // category?: string;
    // available?: boolean;
    sortBy?: BookSortField;
    sortOrder?: "asc" | "desc";
    skip: number;
    take: number;
}

export interface FilterFindAll {
    sortBy: BookSortField;
    sortOrder: "asc" | "desc";
    skip: number;
    take: number;
}

export interface BookRepository {
    findAll(filterOptions: FilterFindAll): Promise<{
        data: Books[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findById(id: number): Promise<{ data: BooksWithUser | null }>;
    findByFilter(filterOptions: FilterOptions): Promise<{
        data: Books[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    //create(book: Book): Promise<Book>;
    update(
        id: number,
        book: Prisma.BooksUpdateInput
    ): Promise<{ data: BooksWithUser | null } | null>;
    //delete(id: string): Promise<boolean>;
}
