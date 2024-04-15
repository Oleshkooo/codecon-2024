import { H1 } from '@/components/typography/h1'
import { Button } from '@/components/ui/button'
import { urlConfig } from '@/config/url.config'
import { memo } from 'react'
import { Link } from 'react-router-dom'

type WelcomePageProps = unknown
export const WelcomePage: React.FC<WelcomePageProps> = memo(() => {
    return (
        <div
            className="w-full h-screen flex flex-col justify-center items-center gap-5 bg-cover relative bg-center"
            style={{
                backgroundImage:
                    'url(https://cff2.earth.com/uploads/2017/08/09051140/Arts-really-do-heal-divisions-and-bring-people-together.jpg)',
            }}
        >
            <div className="w-full h-full bg-gradient-to-t from-black bottom-0 absolute" />
            <div className="z-10 flex flex-col gap-5 pt-52">
                <H1 className="text-white text-center">Welcome to the "Ми поруч"!</H1>
                <div className="flex gap-3 justify-center">
                    <Button asChild>
                        <Link to={urlConfig.pages.login.url}>Login</Link>
                    </Button>
                    <Button asChild>
                        <Link to={urlConfig.pages.register.url}>Register</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
})
WelcomePage.displayName = 'WelcomePage'
