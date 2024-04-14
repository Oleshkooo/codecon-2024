import Navigation from '@/components/Navigation/Navigation'
import { memo } from 'react'
import { Outlet } from 'react-router-dom'

type MainLayoutProps = unknown
export const MainLayout: React.FC<MainLayoutProps> = memo(() => {
    return (
        <div className="flex flex-col h-screen">
            <div className="h-full overflow-y-scroll">
                <Outlet />
            </div>
            <div className="pt-auto">
                <Navigation />
            </div>
        </div>
    )
})
MainLayout.displayName = 'MainLayout'
