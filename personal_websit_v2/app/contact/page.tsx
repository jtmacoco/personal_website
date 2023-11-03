import NavbarPages from "../components/navbarPages";
import Contact from "./contact";

export default function Page() {
    return (
        <main className="bg-background bg-cover h-screen">
            <NavbarPages />
            <Contact />
        </main>
    )
}