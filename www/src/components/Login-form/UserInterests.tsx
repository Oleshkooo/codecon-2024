import { urlConfig } from '@/config/url.config'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Separator } from '@/components/ui/separator'

interface IUserInterestsProps {
    userInterests: string[]
    arrayOfInteresting: string[]
    toggleInterest: (interest: string) => void
}

export const UserInterests: React.FC<IUserInterestsProps> = ({ userInterests, toggleInterest, arrayOfInteresting }) => {
    return (
        <div className="flex flex-col overflow-scroll	">
            <div className="flex-wrap gap-2 flex justify-center container">
                {userInterests.map(interest => (
                    <Button variant={arrayOfInteresting.includes(interest) ? 'secondary' : 'default'} onClick={() => toggleInterest(interest)} className="rounded-full">{interest}</Button>
                ))}
            </div>
            <Separator className='mt-8' />
            <Button disabled={arrayOfInteresting.length <= 0} className="mt-6 max-w-80 self-center">
                <Link to={urlConfig.pages.registrationFinish.url}>Complete profile</Link>
            </Button>
        </div>
    )
}
