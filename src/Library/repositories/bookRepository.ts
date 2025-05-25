import { Book } from "../entities/Book";

export interface FilterOptions {
    author?: string;
    category?: string;
    available?: boolean;
    sortBy: string;
    sortOrder: "asc" | "desc";
    skip: number;
    take: number;
}

export interface BookRepository {
    //findAll(): Promise<{ data: Book[]; total: number }>;
    //findById(id: string): Promise<Book | null>;
    findByFilter(
        filterOptions: FilterOptions
    ): Promise<{
        data: Book[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    //create(book: Book): Promise<Book>;
    //update(id: string, book: Book): Promise<Book | null>;
    //delete(id: string): Promise<boolean>;
}
