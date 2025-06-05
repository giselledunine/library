import { NextResponse } from "next/server";
import { getAuthors } from "@/Authors";
import { AuthorRepositoryPrisma } from "@/Authors/repositories/authorRepositoryPrisma";

export async function GET() {
    const authors = await getAuthors(new AuthorRepositoryPrisma());
    return NextResponse.json(authors);
}
