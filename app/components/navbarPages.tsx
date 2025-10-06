import Link from "next/link"
export default function NavbarPages() {
    return (
        <nav className="sticky top-0 z-50 bg-black h-14 flex items-center pl-4 ">
            <div className=" bg-black">
                <Link href="/">Home</Link>
            </div>
        </nav>
    )
}