import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@material-ui/core/styles'
import { defaultTheme } from 'themes/default.theme'
import { CssBaseline } from '@material-ui/core'
import { Provider } from 'react-redux'
import appStore from 'store/store'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
