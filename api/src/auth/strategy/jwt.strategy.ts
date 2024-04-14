import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import config from 'config'
import { DbService } from '@/db/db.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly dbService: DbService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.get<string>('jwt.secret'),
        })
    }

    async validate(payload: any) {
        const userId = payload.sub
        if (!userId) {
            throw new UnauthorizedException('[Auth] Invalid token')
        }
        const user = await this.dbService.users.get(userId)
        if (!user) {
            throw new UnauthorizedException('[Auth] User not found')
        }
        return user
    }
}
