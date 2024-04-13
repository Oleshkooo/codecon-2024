import { NODE_ENV_DEV } from '@/utils/NODE_ENV'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import config from 'config'

export const graphQLClient = new ApolloClient({
    uri: `${config.get<string>('api')}/graphql`,
    cache: new InMemoryCache(),
    connectToDevTools: NODE_ENV_DEV,
})
