import { PageInfoType } from '@/common/page-info.type'
import { UserType } from '@/graphql/user/dto/independent/user.type'
import { Field, ObjectType } from '@nestjs/graphql'
import { IsArray } from 'class-validator'

@ObjectType()
export class UserConnection {
    @Field(() => [UserType])
    @IsArray()
    nodes: UserType[]

    @Field(() => PageInfoType)
    pageInfo: PageInfoType
}
