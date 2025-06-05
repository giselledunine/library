import { NextResponse } from "next/server";
import { BookRepositoryPrisma } from "@/Book";
import { updateBook } from "@/Book/useCases/updateBook";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const idParsed = parseInt(id);
        if (isNaN(idParsed)) {
            return NextResponse.json(
                { error: "Invalid book ID" },
                { status: 400 }
            );
        }

        const book = await new BookRepositoryPrisma().findById(idParsed);

        if (!book) {
            return NextResponse.json(
                { error: "Book not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(book);
    } catch (error) {
        console.error("Error fetching book:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const idParsed = parseInt(id);
        const body = await request.json();
        console.log(body);
        const book = await updateBook(
            idParsed,
            body,
            new BookRepositoryPrisma()
        );
        return NextResponse.json(book);
    } catch (error) {
        console.error("Error updating book:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
