"use client";
import { BooksWithUser } from "@/Book/entities/Book";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ChangeEvent, use, useEffect, useRef, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    BanIcon,
    Camera,
    Check,
    CheckCircleIcon,
    ChevronsUpDown,
    MessageCircle,
    PencilIcon,
    SendIcon,
    XCircleIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Authors } from "../../../../prisma/src/generated/prisma";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import Image from "next/image";

export default function Book({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const imageUpload = useRef<HTMLInputElement>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [book, setBook] = useState<BooksWithUser | null>(null);
    const [authors, setAuthors] = useState<Authors[]>([]);
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<boolean>(false);
    const [editingNote, setEditingNote] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleImageUploadClick = () => {
        imageUpload.current?.click();
    };

    const updateImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setImageFile(file);
        }
    };

    const formSchema = z.object({
        title: z.string().min(2, {
            message: "Titre doit être au moins de 2 caractères.",
        }),
        author: z.string().min(1, {
            message: "Vous devez entrer un auteur",
        }),
        description: z.string().min(2, {
            message: "Description doit être au moins de 2 caractères.",
        }),
        note: z.string(),
    });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            author: "",
            description: "",
            note: "",
        },
    });

    useEffect(() => {
        if (book) {
            form.reset({
                title: book.title,
                author: book.Authors.name,
                description: book.description || "",
                note: book.note || "",
            });
        }
    }, [book, form]);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("values", values);
        const authorID = authors.find((el) => el.name === values.author)?.id;
        const body = {
            ...values,
            author: authorID,
        };
        try {
            const response = await fetch(`/api/books/${id}`, {
                method: "PATCH",
                body: JSON.stringify(body),
            });
            const result = await response.json();
            setBook(result.data);
            setEditing(false);
            if (!result.data.note) {
                setEditingNote(true);
            } else {
                setEditingNote(false);
            }
            toast.success("Book has been updated.");
        } catch (error) {
            toast(`Error updating book: ${error}`, {});
        }
    }

    useEffect(() => {
        const fetchBook = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/books/${id}`);
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des livres");
                }
                const result = await response.json();
                setBook(result.data);
                if (!result.data.note) {
                    setEditingNote(true);
                }
            } catch (err) {
                toast.error("Erreur lors du chargement des livres");
                console.error("Error fetching books:", err);
            } finally {
                setLoading(false);
            }
        };

        const fetchAuthors = async () => {
            try {
                const response = await fetch(`/api/authors`);
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des auteurs");
                }
                const result = await response.json();
                setAuthors(result.data);
            } catch (err) {
                toast.error("Erreur lors du chargement des auteurs");
                console.error("Error fetching authors:", err);
            }
        };
        fetchAuthors();
        fetchBook();
    }, [id]);

    const getDelay = (delivery: BooksWithUser["Deliveries"][0]) => {
        const delay =
            new Date(delivery.returned_at || new Date()).getTime() -
            new Date(delivery.due_date).getTime();

        const delayDays =
            delay > 0 ? Math.ceil(delay / (1000 * 60 * 60 * 24)) : 0;

        if (delayDays > 0) {
            if (delivery.returned_at) {
                return (
                    <Badge variant="outline" className="gap-2">
                        <XCircleIcon size={16} />
                        <span className="hidden sm:block">
                            {`Retourné ${delayDays} jours en retard`}
                        </span>
                    </Badge>
                );
            }
            return (
                <Badge variant="destructive" className="gap-2">
                    <XCircleIcon size={16} />
                    <span className="hidden sm:block">
                        {`En retard de ${delayDays} jours`}
                    </span>
                </Badge>
            );
        }
        return (
            <Badge variant="outline" className="gap-2">
                <CheckCircleIcon size={16} />
                <span className="hidden sm:block">Pas de retard</span>
            </Badge>
        );
    };

    return (
        <div className="p-4 space-y-4">
            {loading && <Skeleton className="w-full h-[90px]"></Skeleton>}
            {book && !editing && (
                <Card>
                    <div className="grid grid-cols-[auto_1fr_auto] grid-rows-[repeat(2,auto)] justify-between p-4">
                        <div className="col-start-1 col-end-2 row-start-1 row-end-2 grid">
                            <Skeleton className="w-[80px] h-full"></Skeleton>
                        </div>
                        <div className="col-start-2 col-end-3 row-start-1 row-end-2 grid">
                            <CardHeader className="px-4 py-0">
                                <CardTitle className="text-2xl">
                                    {book.title}
                                </CardTitle>
                                <CardDescription>
                                    {book.Authors.name}
                                </CardDescription>
                            </CardHeader>
                        </div>
                        <div className="col-start-1 col-end-5 row-start-2 row-end-3 grid">
                            <div className="py-4">{book.description}</div>
                        </div>
                        <div className="col-start-3 col-end-4 row-start-1 row-end-2 grid">
                            <div className="flex gap-2 flex-col md:justify-between">
                                <Button
                                    variant="outline"
                                    className="px-2 sm:px-4"
                                    onClick={() => setEditing(true)}>
                                    <PencilIcon size={16} />
                                    <span className="hidden sm:block">
                                        Modifier
                                    </span>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="px-2 sm:px-4">
                                    <MessageCircle size={16} />
                                    <span className="hidden sm:block">
                                        Commenter
                                    </span>
                                </Button>
                                <Button
                                    variant="destructive"
                                    className="px-2 sm:px-4">
                                    <BanIcon size={16} />
                                    <span className="hidden sm:block">
                                        Suspendre
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            )}
            {book && editing && (
                <Card>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <CardHeader>
                                <CardTitle>Modifier le livre</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="pb-4 flex flex-col sm:flex-row gap-4">
                                    {imageFile && (
                                        <Image
                                            alt="uploaded"
                                            src={URL.createObjectURL(imageFile)}
                                        />
                                    )}
                                    <div
                                        onClick={handleImageUploadClick}
                                        className="hover:cursor-pointer hover:bg-slate-800 transition-colors w-[140px] h-[200px] bg-slate-900 rounded-2xl p-4 text-center justify-center items-center flex flex-col">
                                        <Camera size={36}></Camera>
                                        <p>Ajoutez une image</p>
                                        <input
                                            type="file"
                                            className="hidden"
                                            onChange={updateImage}
                                            ref={imageUpload}></input>
                                    </div>
                                    <div className="w-full">
                                        <FormField
                                            control={form.control}
                                            name="title"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Titre</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Titre du livre"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormDescription>
                                                        Le titre du livre.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="author"
                                            render={() => (
                                                <FormItem className="flex flex-col gap-1 py-4">
                                                    <FormLabel>
                                                        Auteur
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Popover
                                                            open={open}
                                                            onOpenChange={
                                                                setOpen
                                                            }>
                                                            <PopoverTrigger
                                                                asChild>
                                                                <Button
                                                                    variant="outline"
                                                                    role="combobox"
                                                                    aria-expanded={
                                                                        open
                                                                    }
                                                                    className="w-full justify-between">
                                                                    {form.getValues()
                                                                        .author
                                                                        ? authors.find(
                                                                              (
                                                                                  author
                                                                              ) =>
                                                                                  author.name ===
                                                                                  form.getValues()
                                                                                      .author
                                                                          )
                                                                              ?.name
                                                                        : "Select author..."}
                                                                    <ChevronsUpDown className="opacity-50" />
                                                                </Button>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="w-[200px] p-0">
                                                                <Command>
                                                                    <CommandInput
                                                                        placeholder="Search authors..."
                                                                        className="h-9"
                                                                    />
                                                                    <CommandList>
                                                                        <CommandEmpty>
                                                                            No
                                                                            Author
                                                                            found.
                                                                        </CommandEmpty>
                                                                        <CommandGroup>
                                                                            {authors.map(
                                                                                (
                                                                                    author
                                                                                ) => (
                                                                                    <CommandItem
                                                                                        key={
                                                                                            author.id
                                                                                        }
                                                                                        value={
                                                                                            author.name
                                                                                        }
                                                                                        onSelect={(
                                                                                            currentValue
                                                                                        ) =>
                                                                                            form.setValue(
                                                                                                "author",
                                                                                                currentValue ===
                                                                                                    form.getValues()
                                                                                                        .author
                                                                                                    ? ""
                                                                                                    : currentValue
                                                                                            )
                                                                                        }>
                                                                                        {
                                                                                            author.name
                                                                                        }
                                                                                        <Check
                                                                                            className={cn(
                                                                                                "ml-auto",
                                                                                                form.getValues()
                                                                                                    .author ===
                                                                                                    author.name
                                                                                                    ? "opacity-100"
                                                                                                    : "opacity-0"
                                                                                            )}
                                                                                        />
                                                                                    </CommandItem>
                                                                                )
                                                                            )}
                                                                        </CommandGroup>
                                                                    </CommandList>
                                                                </Command>
                                                            </PopoverContent>
                                                        </Popover>
                                                    </FormControl>
                                                    <FormDescription>
                                                        L&apos;auteur du livre.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Description du livre"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                La description du livre.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                            <CardFooter>
                                <Button type="submit">Modifier</Button>
                            </CardFooter>
                        </form>
                    </Form>
                </Card>
            )}
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center h-[36px]">
                        <CardTitle>Note du bibliothécaire</CardTitle>
                        {!editingNote && (
                            <Button
                                variant={"outline"}
                                size={"icon"}
                                onClick={() => setEditingNote(true)}>
                                <PencilIcon></PencilIcon>
                            </Button>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="overflow-scroll">
                    {!book?.note || editingNote ? (
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-2">
                                <Textarea
                                    className="w-full"
                                    rows={3}
                                    placeholder="Ajouter un commentaire"
                                    defaultValue={form.getValues("note")}
                                    onChange={(e) =>
                                        form.setValue("note", e.target.value)
                                    }
                                />
                                <Button variant="outline" type="submit">
                                    <SendIcon size={16} />
                                    Publier
                                </Button>
                            </div>
                        </form>
                    ) : (
                        <pre className="font-display">{book.note}</pre>
                    )}
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <h2>Emprunts</h2>
                    <div className="w-full">
                        <Input
                            onChange={(e) => {
                                console.log(e.target.value);
                            }}
                            search
                            placeholder="Rechercher un utilisateur"
                        />
                    </div>
                </CardHeader>
                <CardContent className="w-full">
                    <div className="w-full overflow-x-auto">
                        <Table>
                            <TableCaption>
                                La dernier emprunt de ce livre.
                            </TableCaption>
                            <TableHeader className="sticky left-0 bg-background">
                                <TableRow>
                                    <TableHead className="w-[100px]">
                                        Utilisateur
                                    </TableHead>
                                    <TableHead>Date d&apos;emprunt</TableHead>
                                    <TableHead>Date de retour</TableHead>
                                    <TableHead>Statut</TableHead>
                                    <TableHead className="text-right">
                                        Retard
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {book?.Deliveries.map(
                                    (
                                        delivery: BooksWithUser["Deliveries"][0]
                                    ) => (
                                        <TableRow key={delivery.id}>
                                            <TableCell className="font-medium">
                                                {delivery.Users.firstname}{" "}
                                                {delivery.Users.lastname}
                                            </TableCell>
                                            <TableCell>
                                                {new Date(
                                                    delivery.borrowed_at
                                                ).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell>
                                                {new Date(
                                                    delivery.due_date
                                                ).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell>
                                                {delivery.returned_at ? (
                                                    <Badge className="gap-2">
                                                        <CheckCircleIcon
                                                            size={16}
                                                        />
                                                        <span className="hidden sm:block">
                                                            Retourné le{" "}
                                                            {new Date(
                                                                delivery.returned_at
                                                            ).toLocaleDateString()}
                                                        </span>
                                                    </Badge>
                                                ) : (
                                                    <Badge
                                                        variant="destructive"
                                                        className="gap-2">
                                                        <XCircleIcon
                                                            size={16}
                                                        />
                                                        Non retourné
                                                    </Badge>
                                                )}
                                            </TableCell>
                                            <TableCell align="right">
                                                {getDelay(delivery)}
                                            </TableCell>
                                        </TableRow>
                                    )
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
