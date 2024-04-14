import Navigation from '@/components/Navigation/Navigation'
import { memo } from 'react'
import { Outlet } from 'react-router-dom'

type EventPagesLayoutProps = unknown
export const EventPagesLayout: React.FC<EventPagesLayoutProps> = memo(() => {
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
EventPagesLayout.displayName = 'EventPagesLayout'
