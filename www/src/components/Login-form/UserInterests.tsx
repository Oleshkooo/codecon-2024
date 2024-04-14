import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { urlConfig } from '@/config/url.config'

interface IUserInterestsProps {
    userInterests: string[]
    arrayOfInteresting: string[]
    toggleInterest: (interest: string) => void
}

export const UserInterests: React.FC<IUserInterestsProps> = ({ userInterests, toggleInterest, arrayOfInteresting }) => {
    return (
        <div className="flex flex-col overflow-scroll	">
            <div className="flex-wrap inline-block gap-2 flex justify-center">
                {userInterests.map((interes, index) => (
                    <div
                        key={index + interes}
                        onClick={() => toggleInterest(interes)}
                        className={`p-2 md:p-4	 bg-green-500 ${
                            arrayOfInteresting.includes(interes) && 'bg-green-900'
                        } rounded-lg inline-block hover:bg-green-900 transition-all cursor-pointer`}
                    >
                        <p className="font-bold capitalize text-secondaryWhite">{interes}</p>
                    </div>
                ))}
            </div>
            <Button disabled={!!arrayOfInteresting.length <= 0} className="mt-6 max-w-80 self-center">
                <Link to={urlConfig.pages.registrationFinish.url}>Complete profile</Link>
            </Button>
        </div>
    )
}
