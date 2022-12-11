import { createGlobalStyle } from 'styled-components'


 const GlobalStyle = createGlobalStyle<any>`
  @font-face {
    font-family: 'Inter';
    src: url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
  }
  body {
    font-family: 'Inter', sans-serif;
    background: #EBEFF2;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default GlobalStyle;