import Plant from "../components/plant"
export default function PlantSocial() {
    return (
        <main className="bg-background h-screen">
            <div className="relative pl-4 sm:pl-10 top-20 sm:top-24 ">
                <h1 className="sm:text-4xl text-green-600">
                    Plant Social
                    <div className="bg-green-500 h-[4px] w-full" />
                </h1>
            </div>
            <div className="absolute top-12 left-44">
                <Plant />
            </div>
        </main>
    )
}