import { createGlobalStyle } from 'styled-components'
import colors from './colors'
import { deviceMinWidth } from './devices'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    background-color: ${colors.dark};
    color: ${colors.white};
    font-size: 1rem;
  }

  button, input, label {
    font-size: inherit;
    outline: none;
    border: none;
  }

  @media ${deviceMinWidth.desktop} {
    body {
      font-size: 1.5rem;
    }
  }
`
