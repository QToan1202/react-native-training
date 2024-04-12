import '@tamagui/core/reset.css'

import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TamaguiProvider } from 'tamagui'

import { tamaguiConfig } from 'config'

import App from './app/app'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <BrowserRouter>
      <TamaguiProvider config={tamaguiConfig}>
        <App />
      </TamaguiProvider>
    </BrowserRouter>
  </StrictMode>
)
