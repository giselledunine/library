import { prisma } from "@/lib/db";
import { BookRepository, FilterOptions, FilterFindAll } from "./bookRepository";
import { Prisma } from "../../../prisma/src/generated/prisma";

export class BookRepositoryPrisma implements BookRepository {
    async findAll(filterOptions: FilterFindAll) {
        const { sortBy, sortOrder, take, skip } = filterOptions;
        const data = await prisma.books.findMany({
            take: take,
            skip: skip,
            orderBy: sortBy ? { [sortBy]: sortOrder } : undefined,
            include: {
                Authors: true,
                Deliveries: {
                    where: { returned_at: null },
                    take: 1,
                },
            },
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
    async findByFilter(filterOptions: FilterOptions) {
        const { title, sortBy, sortOrder, skip, take } = filterOptions;
        const where: Prisma.BooksWhereInput = title
            ? {
                  OR: [
                      { title: { contains: title, mode: "insensitive" } },
                      {
                          Authors: {
                              name: { contains: title, mode: "insensitive" },
                          },
                      },
                  ],
              }
            : {};

        const orderBy: Prisma.BooksOrderByWithRelationInput = sortBy
            ? { [sortBy]: sortOrder }
            : {};

        const data = await prisma.books.findMany({
            where,
            orderBy,
            skip,
            take,
            include: {
                Authors: true,
                Deliveries: {
                    where: { returned_at: null },
                    take: 1,
                },
            },
        });
        const total = await prisma.books.count({ where });
        const totalPages = Math.ceil(total / take);
        return {
            data,
            total,
            page: skip / take + 1,
            limit: take,
            totalPages,
        };
    }
    async findById(id: number) {
        const data = await prisma.books.findUnique({
            where: { id },
            include: {
                Authors: true,
                Deliveries: {
                    take: 5,
                    include: {
                        Users: {
                            select: {
                                firstname: true,
                                lastname: true,
                            },
                        },
                    },
                },
            },
        });
        return {
            data,
        };
    }
    async update(id: number, book: Prisma.BooksUpdateInput) {
        try {
            const data = await prisma.books.update({
                where: { id },
                data: book,
                include: {
                    Authors: true,
                    Deliveries: {
                        where: { returned_at: null },
                        take: 1,
                        include: {
                            Users: {
                                select: {
                                    firstname: true,
                                    lastname: true,
                                },
                            },
                        },
                    },
                },
            });
            return { data };
        } catch (error) {
            console.error("Error updating book:", error);
            return null;
        }
    }
}
