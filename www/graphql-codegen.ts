import { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'

const dotenvConfig = ['.env', '.env.development'].forEach(env =>
    dotenv.config({
        path: env,
    }),
)

const config: CodegenConfig = {
    schema: process.env.GQL_CODEGEN,
    documents: ['src/**/*.{ts,tsx}'],
    ignoreNoDocuments: true,
    overwrite: true,
    generates: {
        './src/_graphql/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            },
        },
    },
}
export default config
