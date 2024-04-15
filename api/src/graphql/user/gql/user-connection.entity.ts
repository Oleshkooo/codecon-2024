import { PageInfoEntity } from '@/graphql/common/page-info.type'
import { UserEntity } from '@/graphql/user/gql/user.entity'
import { Field, ObjectType } from '@nestjs/graphql'
import { IsArray } from 'class-validator'

@ObjectType()
export class UserConnectionResponse {
    @Field(() => [UserEntity])
    @IsArray()
    nodes: UserEntity[]

    @Field(() => PageInfoEntity)
    pageInfo: PageInfoEntity
}
