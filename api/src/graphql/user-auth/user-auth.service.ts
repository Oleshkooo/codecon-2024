import { DbService } from '@/db/db.service'
import { AuthEntity, LoginInput, RegisterInput } from '@/graphql/user-auth/gql/auth.entity'
import { UserEntity } from '@/graphql/user/gql/user.entity'
import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import bcrypt from 'bcrypt'
import config from 'config'

@Injectable()
export class UserAuthService {
    constructor(
        private readonly dbService: DbService,
        private readonly jwtService: JwtService,
    ) {}

    async generateJwt(user: UserEntity): Promise<string> {
        return this.jwtService.signAsync({
            sub: user.id,
        })
    }

    async encryptPassword(password: string): Promise<string> {
        const saltOrRounds = config.get<number>('auth.saltOrRounds')
        return bcrypt.hash(password, saltOrRounds)
    }

    async comparePassword(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash)
    }

    async login(data: LoginInput): Promise<AuthEntity> {
        const users = await this.dbService.users.query(ref => ref.where('email', '==', data.email))
        const user = users?.[0]
        if (!user) {
            throw new NotFoundException('User not found')
        }
        const passwordMatch = await this.comparePassword(data.password, user.password)
        if (!passwordMatch) {
            throw new UnauthorizedException('Invalid password')
        }
        const token = await this.generateJwt(user)
        return {
            token,
        }
    }

    async register(data: RegisterInput): Promise<AuthEntity> {
        const users = await this.dbService.users.query(ref => ref.where('email', '==', data.email))
        if (users.length > 0) {
            throw new ConflictException('User already exists')
        }
        const hash = await this.encryptPassword(data.password)
        const user = await this.dbService.users.create({
            ...data,
            password: hash,
            isAdmin: false,
            userInteractions: [],
        })
        const token = await this.generateJwt(user)
        return {
            token,
        }
    }
}
