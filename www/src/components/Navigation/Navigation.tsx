import { Heart, Home, LogOut, SquareGanttChart, User } from 'lucide-react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div className="h-full w-full pt-1">
            <div className="md:flex hidden flex-col gap-2 w-16 pl-1 h-96 justify-between rounded-r-[18px] border-2 py-2 border-black  absolute left-0 top-[50%] translate-y-[-50%]">
                <Link className="shrink-0 rounded-sm flex gap-2 items-center duration-300 ease-out  hover:ml-2" to={''}>
                    <Home className="h-11 w-11" />
                </Link>
                <Link className="shrink-0 rounded-sm flex  gap-2 items-center duration-300 ease-out  hover:ml-2" to={''}>
                    <Heart className="h-11 w-11" />
                </Link>
                <Link className="shrink-0 rounded-sm flex  gap-2 items-center duration-300 ease-out  hover:ml-2" to={''}>
                    <User className="h-11 w-11" />
                </Link>
                <Link
                    className="shrink-0 justify-start rounded-sm flex gap-2  items-center duration-300 ease-out  hover:ml-2"
                    to={''}
                >
                    <SquareGanttChart className="h-11 w-11" />
                </Link>
                <Link className="rounded-sm flex justify-start  items-center gap-2 duration-300 ease-out  hover:ml-2" to={''}>
                    <LogOut className="h-11 w-11" />
                </Link>
            </div>
            <footer className="w-screen justify-between px-5 absolute bottom-3 flex md:hidden">
                <Link className="shrink-0 rounded-sm flex flex-col gap-2 items-center" to={''}>
                    <Home className="h-4 w-4" />
                    <span className="text-gray-400 text-[12px]">Home</span>
                </Link>
                <Link className="shrink-0 justify-start flex-col rounded-sm flex gap-2 items-center" to={''}>
                    <SquareGanttChart className="h-4 w-4" />
                    <span className="text-gray-400 text-[12px]">Events</span>
                </Link>
                <Link className="shrink-0 rounded-sm flex flex-col gap-2 items-center" to={''}>
                    <Heart className="h-4 w-4" />
                    <span className="text-gray-400 text-[12px]">Liked</span>
                </Link>
                <Link className="shrink-0 rounded-sm flex flex-col gap-2 items-center" to={''}>
                    <User className="h-4 w-4" />
                    <span className="text-gray-400 text-[12px]">Profile</span>
                </Link>
                <Link className="rounded-sm flex flex-col justify-start items-center gap-2" to={''}>
                    <LogOut className="h-4 w-4 bg-se" />
                    <span className="text-gray-400 text-[12px]">Log out</span>
                </Link>
            </footer>
        </div>
    )
}

export default Navigation
