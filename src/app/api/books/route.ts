import { NextResponse } from "next/server";
import { BookRepositoryPrisma, filterBooks } from "@/Book";

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const title = url.searchParams.get("search") || "";
        const page = parseInt(url.searchParams.get("page") || "1");
        const limit = parseInt(url.searchParams.get("limit") || "10");

        const result = await filterBooks(
            {
                title: title === "" ? undefined : title,
                page,
                limit,
            },
            new BookRepositoryPrisma()
        );
        return NextResponse.json(result);
    } catch (error) {
        console.error("Error fetching books:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

// export async function POST(request: Request) {
//     try {
//         const body = await request.json();
//         const book = await createBook(body);
//         return NextResponse.json(book, { status: 201 });
//     } catch (error) {
//         console.error("Error creating book:", error);
//         return NextResponse.json(
//             { error: "Internal Server Error" },
//             { status: 500 }
//         );
//     }
// }
