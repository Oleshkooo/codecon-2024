import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import { HomePage } from './home.page'

type HomeLayoutProps = unknown
export const HomeLayout: React.FC<HomeLayoutProps> = memo(() => {
    return (
        <>
            <div>
                <Outlet />
                <HomePage />
            </div>
        </>
    )
})
HomeLayout.displayName = 'HomeLayout'
