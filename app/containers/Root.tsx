import React from 'react'
import { hot } from 'react-hot-loader/root'
import { StoreProvider, createStore } from 'easy-peasy'
import { ThemeProvider } from 'emotion-theming'
import config from 'app/config'
import Routes from 'app/Routes'
import GlobalCss from 'app/css/globalCss'
import TitlebarWindow from 'app/components/TitlebarWindow'

interface Props {
  store: ReturnType<typeof createStore>
}
const Root: React.FC<Props> = ({ store }) => (
  <StoreProvider store={store}>
    <ThemeProvider theme={config.theme}>
      <GlobalCss />
      <TitlebarWindow
        platform="darwin"
        position="center"
        backgroundColor="transparent"
      >
        <Routes />
      </TitlebarWindow>
    </ThemeProvider>
  </StoreProvider>
)

export default hot(Root)
