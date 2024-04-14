import { memo } from 'react'
import { Outlet } from 'react-router-dom'

type HomeLayoutProps = unknown
export const HomeLayout: React.FC<HomeLayoutProps> = memo(() => {
    return (
        <>
            <div>
                <Outlet />
            </div>
        </>
    )
})
HomeLayout.displayName = 'HomeLayout'
