import { UserEntity, useUserConnectionQuery } from '@/__generated__/graphql'
import { H1 } from '@/components/typography/h1'
import { H3 } from '@/components/typography/h3'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { urlConfig } from '@/config/url.config'
import { ErrorPage } from '@/pages/error/error.page'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Ellipsis, ThumbsUp, X } from 'lucide-react'
import { memo, useCallback, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

type MainPageProps = unknown
export const MainPage: React.FC<MainPageProps> = memo(() => {
    const token = localStorage.getItem('userToken')
    const { data, error } = useUserConnectionQuery({
        context: {
            headers: {
                // Authorization: `Bearer ${localStorage.getItem('userToken')}`
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJQdDFpeG1naURNTXJTeWdpYXMyUiIsImlhdCI6MTcxMzA4NDgxNSwiZXhwIjoxNzE0ODk5MjE1fQ.26I9-AoWTTSF6mESoraFdLIFCitJmRzH9XNAxw1snFo`,
            },
        },
    })
    const [mutableData, setMutableData] = useState(data?.userConnection.nodes)
    const [cardAnimation] = useAutoAnimate<HTMLDivElement>()

    const handleClick = useCallback(
        (id: UserEntity['id']) => () => {
            setMutableData(prev => prev?.filter(user => user.id !== id))
        },
        [],
    )

    useEffect(() => {
        setMutableData(data?.userConnection.nodes)
    }, [data?.userConnection.nodes])

    if (!token) {
        return <Navigate to={urlConfig.pages.welcome.url} />
    }
    if (error) {
        console.error(error)
        return <ErrorPage />
    }

    return (
        <div ref={cardAnimation} className="h-full overflow-hidden p-5 space-y-5">
            {mutableData?.map(user => (
                <div key={user.id} className="h-full w-full relative">
                    <img src={user.imgURL} alt="" className="h-full w-full rounded-lg object-cover" />
                    <div className="h-full w-full rounded-lg absolute top-0 bg-gradient-to-b from-black/70" />
                    <div className="h-full w-full flex flex-col absolute top-0 p-5 space-y-3">
                        <div className="flex justify-between items-center w-full">
                            <H3 className="text-white">
                                {user.fullName}, {user.age}
                            </H3>
                            <Button variant="link" asChild className='z-50'>
                                <Link to={urlConfig.pages.profile.getURL(user.id)}>
                                    <Ellipsis className="text-white" />
                                </Link>
                            </Button>
                        </div>
                        <Badge variant="secondary" className="w-fit">
                            {user.location}
                        </Badge>
                        <div className="w-full flex gap-2 flex-wrap">
                            {user.interests.map(interest => (
                                <Badge key={interest} variant="outline" className="text-white">
                                    {interest}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div className="h-full w-full flex flex-col-reverse absolute top-0 p-5 space-y-2">
                        <div className="w-full flex justify-center space-x-5">
                            <Button variant="secondary" onClick={handleClick(user.id)} className="w-14 h-14 p-2 rounded-full">
                                <X />
                            </Button>
                            <Button variant="secondary" onClick={handleClick(user.id)} className="w-14 h-14 p-2 rounded-full">
                                <ThumbsUp />
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
            {data && (
                <div className="w-full h-full flex justify-center items-center">
                    <H1 className="animate-in fade-in duration-1000">That's all for now</H1>
                </div>
            )}
        </div>
    )
})
MainPage.displayName = 'MainPage'
