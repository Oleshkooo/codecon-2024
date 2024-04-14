import Navigation from '@/components/Navigation/Navigation'
import { memo } from 'react'
import { Outlet } from 'react-router-dom'

type UserProfileLayoutProps = unknown
export const UserProfileLayout: React.FC<UserProfileLayoutProps> = memo(() => {
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
UserProfileLayout.displayName = 'UserProfileLayout'
