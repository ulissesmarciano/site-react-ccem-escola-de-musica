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

    greetingButtonLink: css`
        p {
            padding: .5rem 2rem;
            color: #fff;
            background-color: #350030;
            border-radius: 5px;
            
            font-size: 1.5rem;
        }
        
        p:hover {
            transition: 0.3s;
            background-color: #b96646;
        }

        @media(min-width: 820px){
            p{
                padding: 1rem 4rem;
                font-size: 1.8rem;
            }
        }
    `,
}