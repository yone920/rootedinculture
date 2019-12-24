import "./src/styles/global.css"
import React from 'react'
import { StoreProvider } from './src/context/StoreContext'
import * as theme from './src/config/theme'
import { ThemeProvider } from 'styled-components'


export const wrapRootElement = ({ element }) => (
    <StoreProvider><ThemeProvider theme={theme}>{element}</ThemeProvider></StoreProvider>
)