import { AlertCircle } from "lucide-react";

export default function Alert({
    message,
    title,
}: {
    message: string;
    title: string;
}) {
    return (
        <div className="flex items-stretch rounded-2xl overflow-hidden border border-accent-foreground bg-accent-background h-fit w-full">
            <div className="flex items-center justify-center gap-2 bg-accent-foreground p-2 self-stretch">
                <AlertCircle className="text-accent-background" />
            </div>
            <div className="flex flex-col gap-2 py-2 px-4">
                <p className="font-bold uppercase">{title}</p>
                <p>{message}</p>
            </div>
        </div>
    );
}
