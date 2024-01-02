import { defineNuxtModule, addPlugin, createResolver, installModule } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'unaiui',
    configKey: 'unaiui',
  },
  hooks: {
    'components:dirs'(dirs) {
      const { resolve } = createResolver(import.meta.url)
      dirs.push({
        path: resolve('./runtime/components'),
      });
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)
    nuxt.options.css.push(resolver.resolve('./runtime/styles/global.css'));
    
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'));
    await installModule('nuxt-svgo', {});
    await installModule('nuxt-icon', {});
  }
})
