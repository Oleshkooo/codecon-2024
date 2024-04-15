import { DbService } from '@/db/db.service'
import { CursorConnectionArgs } from '@/graphql/common/cursor-connection.arg'
import { IsSuccessEntity } from '@/graphql/common/is-success.entity'
import { UserConnectionResponse } from '@/graphql/user/gql/user-connection.entity'
import { UserIdArgs } from '@/graphql/user/gql/user-id.args'
import { UserEntity } from '@/graphql/user/gql/user.entity'
import { Injectable } from '@nestjs/common'

const AGE_RANGE = 7

@Injectable()
export class UserService {
    constructor(private readonly dbService: DbService) {}

    async getUserConnection(args: CursorConnectionArgs, currentUser: UserEntity): Promise<UserConnectionResponse> {
        const matchingUsers = await this.dbService.users.query(ref => {
            let query = ref
                .where('age', '>=', currentUser.age - AGE_RANGE)
                .where('age', '<=', currentUser.age + AGE_RANGE)
                .limit(args.limit)

            // TODO: Filter by interests
            // .where('interests', 'array-contains-any', currentUser.interests)

            // TODO: Filter by userInteractions
            // if (currentUser.userInteractions.length > 0) {
            //     query = query.where('userInteractions', 'not-in', currentUser.userInteractions)
            // }

            if (args.nextPageCursor != null) {
                query = query.offset(args.nextPageCursor)
            }
            return query
        })
        return {
            nodes: matchingUsers.filter(user => user.id !== currentUser.id),
            pageInfo: {
                limit: args.limit,
                nextPageCursor: (args.nextPageCursor || 0) + args.limit,
            },
        }
    }

    async likeUser(args: UserIdArgs, currentUser: UserEntity): Promise<IsSuccessEntity> {
        const user = await this.dbService.users.get(args.userId)
        if (!user) {
            return { isSuccess: false, error: 'User not found' }
        }
        if (currentUser.userInteractions.includes(args.userId)) {
            return { isSuccess: true }
        }
        currentUser.userInteractions.push(args.userId)
        await this.dbService.users.update(currentUser)
        return { isSuccess: true }
    }

    async dislikeUser(args: UserIdArgs, currentUser: UserEntity): Promise<IsSuccessEntity> {
        const user = await this.dbService.users.get(args.userId)
        if (!user) {
            return { isSuccess: false, error: 'User not found' }
        }
        if (currentUser.userInteractions.includes(args.userId)) {
            return { isSuccess: true }
        }
        currentUser.userInteractions.push(args.userId)
        await this.dbService.users.update(currentUser)
        return { isSuccess: true }
    }
}
