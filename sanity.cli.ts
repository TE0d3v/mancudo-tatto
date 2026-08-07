import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '41o4tfho',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
  typegen: {
    enabled: true,
    path: '../mancudo/src/**/*.{ts,tsx,js,jsx}',
    schema: 'schema.json',
    generates: '../mancudo/sanity.types.ts',
    overloadClientMethods: true,
  },
})
