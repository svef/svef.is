import { configure } from '@kadira/storybook';
import { setOptions, } from '@kadira/storybook-addon-options'

setOptions({
  name: 'Samtök Vefiðnaðarins',
  url: '/',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: true,
})


const req = require.context('../src', true, /-(story|stories)\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
