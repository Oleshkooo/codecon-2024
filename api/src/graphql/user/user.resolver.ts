import { CurrentUser } from '@/auth/decorators/current-user.decorator'
import { GqlAuthGuard } from '@/auth/guards/gql-auth.guard'
import { UserEntity } from '@/graphql/user/gql/user.entity'
import { UserService } from '@/graphql/user/user.service'
import { UseGuards } from '@nestjs/common'
import { Query, Resolver } from '@nestjs/graphql'

@UseGuards(GqlAuthGuard)
@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [UserEntity])
    userConnection(): Promise<UserEntity[]> {
        return this.userService.getUserConnection()
    }
}
