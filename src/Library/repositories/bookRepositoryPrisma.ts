import { prisma } from "@/lib/db";
import { BookRepository, FilterOptions } from "./bookRepository";

export class BookRepositoryPrisma implements BookRepository {
    async findByFilter(filterOptions: FilterOptions) {
        const { author, category, available, sortBy, sortOrder, skip, take } =
            filterOptions;
        const where = {
            author: author ? author : undefined,
            category: category ? category : undefined,
            available: available !== undefined ? available : undefined,
        };
        const data = await prisma.book.findMany({
            where,
            orderBy: { [sortBy]: sortOrder },
            skip,
            take,
        });
        const total = await prisma.book.count({ where });
        const totalPages = Math.ceil(total / take);
        return {
            data,
            total,
            page: skip / take + 1,
            limit: take,
            totalPages,
        };
    }
}
