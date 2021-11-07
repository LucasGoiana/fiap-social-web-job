import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

   :root{
       --primary: #ED145B;
       --bgPrimary: #08090B;
       --bgSecondary: #1B1E22;
       --textPrimary: #91A3AD;
       --textSecondary: #616D72;
       --textButton: #ffffff;
   }

   *{
        margin: 0;
        padding: 0;
        outline: 0;

        box-sizing: border-box;
    }

    body{
        font-family: sans-serif;
        background-color: var(--bgPrimary);

        color: var(--textPrimary);

        overflow: hidden;
    }

    input, select {
        border: 2px solid var(--primary);
        width: 100%;
        padding: 5px;
        height: 35px;
    }

    button {
        color: var(--textButton);
        padding: 5px;
        font-weight: bold;
        background-color: var(--primary);
        border:none;
        transition: transform 0.2s;

        :active{
            transform: scale(0.9);
        }
    }
`;