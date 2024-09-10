import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing:  border-box;
        scroll-behavior: smooth;
        font-family: 'Londrina Solid', sans-serif;
        list-style: none;
    }

    body {
        background-color: #fdf9ed;
    }

    a {
        text-decoration: none;
        color: #000;
        cursor: pointer;
    }
`