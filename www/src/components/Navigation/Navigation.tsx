import { Heart, Home, SquareGanttChart, User } from 'lucide-react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <footer className="w-screen justify-around px-5 py-2 flex bg-white border-t border-gray-200">
            <Link className="shrink-0 rounded-sm flex flex-col gap-2 items-center" to={'/home'}>
                <Home className="h-4 w-4" />
                <span className="text-gray-400 text-[12px]">Home</span>
            </Link>
            <Link className="shrink-0 justify-start flex-col rounded-sm flex gap-2 items-center" to={'/events'}>
                <SquareGanttChart className="h-4 w-4" />
                <span className="text-gray-400 text-[12px]">Events</span>
            </Link>
            <Link className="shrink-0 rounded-sm flex flex-col gap-2 items-center" to={''}>
                <Heart className="h-4 w-4" />
                <span className="text-gray-400 text-[12px]">Liked</span>
            </Link>
            <Link className="shrink-0 rounded-sm flex flex-col gap-2 items-center" to={'/user-profile'}>
                <User className="h-4 w-4" />
                <span className="text-gray-400 text-[12px]">Profile</span>
            </Link>
        </footer>
    )
}

export default Navigation
