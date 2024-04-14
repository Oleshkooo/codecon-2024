import { UserAuthModule } from '@/graphql/user-auth/user-auth.module';
import { UserModule } from '@/graphql/user/user.module';
import { Module } from '@nestjs/common'

@Module({
    imports: [UserAuthModule, UserModule],
})
export class GraphQLEndpointsModule {}
