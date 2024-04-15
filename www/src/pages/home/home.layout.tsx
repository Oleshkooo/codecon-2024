import Navigation from '@/components/Navigation/Navigation'
import { memo } from 'react'
import { Outlet } from 'react-router-dom'

type HomeLayoutProps = unknown
export const HomeLayout: React.FC<HomeLayoutProps> = memo(() => {
    return (
        <>
            <div>
                <Outlet />
                <Navigation />
            </div>
        </>
    )
})
HomeLayout.displayName = 'HomeLayout'
