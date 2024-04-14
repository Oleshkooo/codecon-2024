import { DbService } from '@/db/db.service'
import { UserAuthResolver } from '@/graphql/user-auth/user-auth.resolver'
import { UserAuthService } from '@/graphql/user-auth/user-auth.service'
import { Module } from '@nestjs/common'

@Module({
    providers: [UserAuthResolver, UserAuthService, DbService],
})
export class UserAuthModule {}
