import { Authors } from "../../../prisma/src/generated/prisma";
import { AuthorRepository } from "../repositories/authorRepository";

export const getAuthors = async (
    authorRepo: AuthorRepository
): Promise<{
    data: Authors[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}> => {
    "use server";

    const result = await authorRepo.findAll({
        sortBy: "name",
        sortOrder: "asc",
        skip: 0,
        take: 10,
    });
    return result;
};
