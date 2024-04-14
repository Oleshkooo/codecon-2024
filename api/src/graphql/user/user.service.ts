import { DbService } from '@/db/db.service'
import { UserEntity } from '@/graphql/user/gql/user.entity'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
    constructor(private readonly dbService: DbService) {}

    async getUserConnection(): Promise<UserEntity[]> {
        return []
    }
}
