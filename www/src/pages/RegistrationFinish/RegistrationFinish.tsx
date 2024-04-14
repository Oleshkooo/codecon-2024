import { CustomWrapperHF } from '@/components/customs/Custom-Wrapper-HF/Custom-Wrapper-HF'
import { H1 } from '@/components/typography/h1'
import { Button } from '@/components/ui/button'
import { urlConfig } from '@/config/url.config'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import Confetti from 'react-confetti'
import { Link } from 'react-router-dom'

export const RegistrationFinish = () => {
    const { height, width } = useWindowDimensions()

    return (
        <CustomWrapperHF>
            <div className="container">
                <H1 className="text-center text-primaryGreen">
                    Congratulations! Your profile is complete!
                </H1>
            </div>
            <Confetti width={width} height={height} numberOfPieces={300} recycle={false} />
            <Button className="bg-primaryGreen mt-8 hover:bg-secondaryGreen" onClick={() => console.log('CLOCK')}>
                <Link to={urlConfig.pages.main.url}>
                    <p className="colo">Move on</p>
                </Link>
            </Button>
        </CustomWrapperHF>
    )
}
