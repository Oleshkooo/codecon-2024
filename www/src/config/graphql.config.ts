import { NODE_ENV_DEV } from '@/utils/NODE_ENV'
import { ApolloClient, InMemoryCache } from '@apollo/client'

export const graphQLClient = new ApolloClient({
    uri: `${import.meta.env.VITE_GRAPHQL_ENDPOINT}`,
    cache: new InMemoryCache(),
    connectToDevTools: NODE_ENV_DEV,
})
