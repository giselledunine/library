export default function BookCard({
    title,
    author,
}: {
    title: string;
    author: string;
}) {
    return (
        <div className="relative flex border-2 border-primary-fixedDim bg-background rounded-2xl overflow-hidden">
            <div className="self-stretch w-10 bg-primary-fixedDim"></div>
            <div className="p-2">
                <p className="font-bold">{title}</p>
                <p>{author}</p>
            </div>
            <div className="absolute capitalize bottom-0 right-0 bg-primary-fixedDim py-1 px-2 rounded-xl text-sm">
                disponible
            </div>
        </div>
    );
}
