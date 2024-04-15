import { AuthEntity, LoginInput, RegisterInput } from '@/graphql/user-auth/gql/auth.entity'
import { UserAuthService } from '@/graphql/user-auth/user-auth.service'
import { Args, Mutation, Resolver } from '@nestjs/graphql'

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
