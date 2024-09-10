import { css } from "styled-components";

export const linkStyles = {
    headerStyleLink: css`
        color: #350030;
        p {
            font-size: 2rem;
            text-align: center;
            padding: 20px 40px;
            transition: 0.3s;
        }
        
        :hover{
            background-color: #b96646;
            color: #fdf9ed;
        }

        @media(min-width: 768px){
            p {
                padding: 0;
                font-size: 1.4rem;

            }

            :hover {
                background-color: transparent;
                color: #b96646;
            }
        }
    `,

    sidebarStyleLink: css`
    `,
}