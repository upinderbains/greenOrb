import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  
    --color-primary: rgb(162, 212, 162);
    --color-secondary: rgb(93, 145, 93);
    --color-tertiary: rgb(97, 126, 97);
    --color-white: #ffffff;
 
    --fs-1: 1.2rem;
    --fs-2: 1.4rem;
    --fs-3: 1.6rem;
    --fs-4: 1.8rem;
    --fs-5: 2rem;
    --fs-6: 2.2rem;
    --fs-7: 3.2rem;
    --fs-8: 3.5rem;
    --fs-9: 4rem;
    --fs-10: 4.5rem;
    --fs-11: 5rem;
}


*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  font-weight: 400;
  font-family: 'Open Sans', 'Lato', sans-serif;
  line-height: 1.6;
}
img{
    width: 100%;
    max-width: 100%;
}
svg{
    width: 100%;
    height: 100%;
}
a{
    text-decoration: none;
    cursor: pointer;
}
button{
    cursor: pointer;
    border: 0;
    outline: none;
}
ul{
    list-style: none;
    li {
        cursor: pointer;
    }
}

.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: 'sidebar stories search';
}

.sidebar {
  grid-area: sidebar;
  border-right: 1px solid rgb(201, 199, 199);
}
.stories {
  grid-area: stories;
  min-width: 600px;
  min-height: 100vh;
}
.header {
  grid-area: search;
  border-left: 1px solid rgb(201, 199, 199);
}

`;

export default GlobalStyle;
