export const usePluginsStore = defineStore('pluginsStore', {
  state: () => ({
    name: 'Plugins',
    description: 'The plugins for Quokka',
    pluginsList: [
      {
        name: 'Plugin 1',
        description: 'This is the first plugin',
        version: '1.0.0',
        website: 'https://example.com/plugin1',
        downloadUrl: 'https://example.com/plugin1/download',
        author: 'Author 1',
        authorUrl: 'https://example.com/author1',
        icon: 'https://example.com/plugin1/icon.png',
      },
    ]
  }),
  actions: {
    test() {
      console.log('test action called');
    }
  }
})
