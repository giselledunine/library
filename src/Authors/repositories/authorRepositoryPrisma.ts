import { AuthorRepository, FilterFindAll } from "./authorRepository";
import { prisma } from "@/lib/db";

export class AuthorRepositoryPrisma implements AuthorRepository {
    async findAll(filterOptions: FilterFindAll) {
        const { sortBy, sortOrder, take, skip } = filterOptions;
        const data = await prisma.authors.findMany({
            take: take,
            skip: skip,
            orderBy: sortBy ? { [sortBy]: sortOrder } : undefined,
        });
        const total = await prisma.books.count();
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
