import { AppModule } from '@/app.module'
import { ENV } from '@/utils/env'
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

const bootstrap = async () => {
    const app = await NestFactory.create(AppModule)

    app.enableCors({
        origin: '*'
    })
    app.useGlobalPipes(new ValidationPipe())

    process.on('uncaughtException', (error, origin) => {
        console.error('uncaughtException: ', error, 'Origin:', origin)
    })
    process.on('unhandledRejection', (reason, promise) => {
        console.error('Unhandled Rejection at:', promise, 'Reason:', reason)
    })

    const port = ENV.env.PORT || 4000
    await app.listen(port)
}
bootstrap()
