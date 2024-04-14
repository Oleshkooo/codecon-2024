import React from 'react'
import { CustomWrapperHF } from '@/components/customs/Custom-Wrapper-HF/Custom-Wrapper-HF'
import Confetti from 'react-confetti'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { urlConfig } from '@/config/url.config'

export const RegistrationFinish = () => {
    const { height, width } = useWindowDimensions()

    return (
        <CustomWrapperHF>
            <div className="container">
                <h3 className="text-center text-4xl text-primaryGreen font-bold">
                    Congratulations, you have completed setting up your profile
                </h3>
            </div>
            <Confetti width={width} height={height} numberOfPieces={300} recycle={false} />
            <Button className="bg-primaryGreen mt-6 hover:bg-secondaryGreen" onClick={() => console.log('CLOCK')}>
                <Link to={urlConfig.pages.main.url}>
                    <p className="colo">Move on</p>
                </Link>
            </Button>
        </CustomWrapperHF>
    )
}
