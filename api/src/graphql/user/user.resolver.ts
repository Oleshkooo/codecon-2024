import { CurrentUser } from '@/auth/decorators/current-user.decorator'
import { GqlAuthGuard } from '@/auth/guards/gql-auth.guard'
import { CursorConnectionArgs } from '@/graphql/common/cursor-connection.arg'
import { IsSuccessEntity } from '@/graphql/common/is-success.entity'
import { UserConnectionResponse } from '@/graphql/user/gql/user-connection.entity'
import { UserIdArgs } from '@/graphql/user/gql/user-id.args'
import { UserEntity } from '@/graphql/user/gql/user.entity'
import { UserService } from '@/graphql/user/user.service'
import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

@UseGuards(GqlAuthGuard)
@Resolver(() => UserEntity)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => UserConnectionResponse)
    userConnection(
        @Args({ type: () => CursorConnectionArgs }) args: CursorConnectionArgs,
        @CurrentUser() currentUser: UserEntity,
    ): Promise<UserConnectionResponse> {
        return this.userService.getUserConnection(args, currentUser)
    }

    @Mutation(() => IsSuccessEntity)
    likeUser(
        @Args({ type: () => UserIdArgs }) args: UserIdArgs,
        @CurrentUser() currentUser: UserEntity,
    ): Promise<IsSuccessEntity> {
        return this.userService.likeUser(args, currentUser)
    }

    @Mutation(() => IsSuccessEntity)
    dislikeUser(
        @Args({ type: () => UserIdArgs }) args: UserIdArgs,
        @CurrentUser() currentUser: UserEntity,
    ): Promise<IsSuccessEntity> {
        return this.userService.dislikeUser(args, currentUser)
    }
}
