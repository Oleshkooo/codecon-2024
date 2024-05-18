import { registerEnumType } from '@nestjs/graphql'

export enum UserGenderEnum {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    OTHER = 'OTHER',
}

registerEnumType(UserGenderEnum, {
    name: 'UserGenderEnum',
})
