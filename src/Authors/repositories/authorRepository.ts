import { Prisma, Authors } from "../../../prisma/src/generated/prisma";

export type AuthorSortField = keyof Pick<
    Prisma.AuthorsOrderByWithRelationInput,
    "id" | "name"
>;

export interface FilterFindAll {
    sortBy: AuthorSortField;
    sortOrder: "asc" | "desc";
    skip: number;
    take: number;
}

export interface AuthorRepository {
    findAll(filterOptions: FilterFindAll): Promise<{
        data: Authors[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
}
