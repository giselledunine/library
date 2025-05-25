import { Button } from "@/components/ui/button";
import { Menu, HelpCircle, Sliders } from "lucide-react";
import { Input } from "@/components/ui/input";
import Alert from "@/components/Alert";
import Avatar from "@/components/Avatar";
export default function Home() {
    const alerts = [
        {
            id: 1,
            message:
                "En raison de la fermeture du bâtiment, les ascenseurs sont en panne.",
            title: "Ascenseur en panne",
        },
        {
            id: 2,
            message: "Fermeture du bâtiment en raison d'un événement sportif",
            title: "Fermeture du bâtiment le 25/05/2025",
        },
    ];
    return (
        <div className="grid grid-rows-[auto_3fr_1fr] h-screen">
            <header className="flex flex-col gap-2 p-4">
                <div className="flex items-center justify-between gap-2">
                    <h1>Library</h1>
                    <div className="flex items-center gap-2">
                        <Button variant={"outline"} size={"icon"}>
                            <HelpCircle />
                        </Button>
                        <Avatar />
                        <Button variant={"outline"} size={"icon"}>
                            <Menu />
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                    <Button variant={"accentOutlined"} size={"icon"}>
                        <Sliders />
                    </Button>
                    <Input placeholder="Search" search />
                </div>
            </header>
            <main className="p-4 h-full">
                <div className="flex flex-col gap-2">
                    {alerts.map((alert) => (
                        <Alert
                            key={alert.id}
                            message={alert.message}
                            title={alert.title}
                        />
                    ))}
                </div>
            </main>
            <footer>
                <h3>Footer</h3>
            </footer>
        </div>
    );
}
