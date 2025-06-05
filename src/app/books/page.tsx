"use client";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sliders } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useCallback, useEffect, useState } from "react";
import { Books } from "@/Book/entities/Book";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";

export default function BookList() {
    const [books, setBooks] = useState<Books[]>([]);
    const [search, setSearch] = useState<string>("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [initialized, setInitialized] = useState(false);
    const router = useRouter();

    const fetchData = useCallback(
        async (searchQuery: string = "") => {
            try {
                setLoading(true);
                const response = await fetch(
                    `/api/books?page=${currentPage}&limit=10&sortBy=title&sortOrder=asc${
                        searchQuery ? `&search=${searchQuery}` : ""
                    }`
                );
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des livres");
                }
                const result = await response.json();
                setBooks(result.data);
                setTotalPages(result.totalPages);
                setError(null);
            } catch (err) {
                setError("Erreur lors du chargement des livres");
                console.error("Error fetching books:", err);
            } finally {
                setLoading(false);
                if (!initialized) {
                    setInitialized(true);
                }
            }
        },
        [currentPage, initialized]
    );

    useEffect(() => {
        fetchData();
    }, [currentPage, fetchData, initialized]);

    const handleSearch = () => {
        setCurrentPage(1); // Réinitialiser à la première page lors d'une nouvelle recherche
        fetchData(search);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };
    return (
        <div className="grid grid-rows-[auto_1fr] p-4 gap-4">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2">
                <Button size={"icon"}>
                    <Sliders size={48} />
                </Button>
                <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search"
                    search
                />
                <Button onClick={handleSearch}>Search</Button>
            </div>
            <div className="flex flex-col gap-4 justify-between">
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <Skeleton
                                key={i}
                                className="rounded-xl h-[90px] w-full"
                            />
                        ))}
                    </div>
                ) : error ? (
                    <div className="text-red-500">{error}</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {books.map((book) => (
                            <Card key={book.id}>
                                <div className="flex h-full">
                                    <div className="py-4 pl-4">
                                        <Skeleton className="h-full w-[80px]"></Skeleton>
                                    </div>
                                    <div className="w-full h-full flex flex-col justify-between">
                                        <CardHeader>
                                            <div className="flex justify-between gap-2">
                                                <div>
                                                    <CardTitle className="leading-5">
                                                        {book.title}
                                                    </CardTitle>
                                                    <CardDescription>
                                                        {book.Authors.name}
                                                    </CardDescription>
                                                </div>
                                                <Button
                                                    variant={"secondary"}
                                                    onClick={() =>
                                                        router.push(
                                                            `/books/${book.id}`
                                                        )
                                                    }>
                                                    <ExternalLink />
                                                </Button>
                                            </div>
                                        </CardHeader>
                                        <CardFooter>
                                            <div className="flex justify-end w-full">
                                                {book.Deliveries.length > 0 ? (
                                                    <Badge variant={"outline"}>
                                                        Disponible le{" "}
                                                        {new Date(
                                                            book.Deliveries[0].due_date
                                                        ).toLocaleDateString()}
                                                    </Badge>
                                                ) : (
                                                    <Badge>Disponible</Badge>
                                                )}
                                            </div>
                                        </CardFooter>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={() =>
                                    setCurrentPage((p) => Math.max(1, p - 1))
                                }
                            />
                        </PaginationItem>
                        {totalPages > 3 ? (
                            <>
                                {Array.from(
                                    { length: totalPages },
                                    (_, i) => i + 1
                                )
                                    .slice(0, 3)
                                    .map((el) => (
                                        <PaginationItem key={el}>
                                            <PaginationLink
                                                onClick={() =>
                                                    setCurrentPage(el)
                                                }
                                                isActive={el == currentPage}>
                                                {el}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}
                                <PaginationEllipsis />
                                {Array.from(
                                    { length: totalPages },
                                    (_, i) => i + 1
                                )
                                    .slice(totalPages - 3, totalPages)
                                    .map((el) => (
                                        <PaginationItem key={el}>
                                            <PaginationLink
                                                onClick={() =>
                                                    setCurrentPage(el)
                                                }
                                                isActive={el == currentPage}>
                                                {el}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}
                            </>
                        ) : (
                            <>
                                {Array.from(
                                    { length: totalPages },
                                    (_, i) => i + 1
                                )
                                    .slice(0, 3)
                                    .map((el) => (
                                        <PaginationItem key={el}>
                                            <PaginationLink
                                                onClick={() =>
                                                    setCurrentPage(el)
                                                }
                                                isActive={el == currentPage}>
                                                {el}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}
                            </>
                        )}
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={() =>
                                    setCurrentPage((p) =>
                                        Math.min(totalPages, p + 1)
                                    )
                                }
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
