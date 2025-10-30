import { Outlet, Link } from "react-router-dom"

export const MainLayout = () => {
    return (
        <>
            <div className="h-screen flex flex-col justify-between">
                <header className="bg-amber-300 flex p-[30px] justify-center gap-5 b">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/contact"}>Contact</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/profile"}>Profile</Link>
        
                </header>
                <main className="grow">
                    <Outlet />
                </main>
                <footer className="bg-amber-500 flex p-[30px] justify-center gap-5">
                    Footer
                </footer>
            </div>
        </>


    )
}