import NavbarPages from "../components/navbarPages";
import PlantSocial from "./plant-social";
export default function Page() {
    return (
        <>
            <div className="bg-background h-screen">
                <NavbarPages />
                <PlantSocial />
            </div>
        </>
    )
}