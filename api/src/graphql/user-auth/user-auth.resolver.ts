import { UserAuthService } from '@/graphql/user-auth/user-auth.service'
import { AuthEntity, LoginInput, RegisterInput } from '@/graphql/user-auth/gql/auth.entity'
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { CurrentUser } from '@/auth/decorators/current-user.decorator'

@Resolver()
export class UserAuthResolver {
    constructor(private readonly userAuthService: UserAuthService) {}

    @Mutation(() => AuthEntity)
    login(@Args('data') data: LoginInput): Promise<AuthEntity> {
        return this.userAuthService.login(data)
    }

    @Mutation(() => AuthEntity)
    register(@Args('data') data: RegisterInput): Promise<AuthEntity> {
        return this.userAuthService.register(data)
    }
}
