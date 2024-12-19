import styled from "styled-components";
import backgroundMobileImage from "../../assets/images/bg-mobile.svg"
import backgroundDesktopImage from "../../assets/images/bg-desktop.svg"

export const Container = styled.section`

    background: url(${backgroundMobileImage}) top center no-repeat ;
    background-size: 350px;

    .greetings-container {
        min-height: calc(100vh - 129.39px);

        display: flex;
        flex-direction: column;
    }
    
    .greetings-container .image-container {
        //padding: 3rem 0;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
    }

    .greetings-container .image-container img {
        height: 18rem;
    }

    .greetings-container .info-container {
        padding: 2rem 1rem;
        gap: 1.2rem;

        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
    }

    .greetings-container .info-container .title {
        font-size: 1.6rem;
        color: #350030;
    }

    .greetings-container .info-container .text {
        font-family: 'Poppins', sans-serif;
        text-align: center;
    }

    @media(min-width: 480px){
        background-size: 500px;
        .greetings-container {
            min-height: calc(100vh - 128.77px);
        }

        .greetings-container .info-container {
            padding-top: 5rem;
        }

        .greetings-container .info-container .title {
            font-size: 1.8rem;
        }

        .greetings-container .info-container .text {
            line-height: 2rem;
            font-size: 1.4rem;
        }
    }

    @media(min-width: 820px){

        .greetings-container {
            height: calc(100vh - 15038px);
        }
        
        .greetings-container .image-container img {
            height: 22rem;
            margin-top: 3rem;
        }

        .greetings-container .info-container {
            margin-top: 4rem;
            padding: 0 1rem;
            gap: 1rem;
        }

        .greetings-container .info-container .title {
            font-size: 2.6rem;
        }
    
        .greetings-container .info-container .text{
            font-size: 1.4rem;
            line-height: 2rem;
        }
    }

    @media(min-width: 1024px){
        background: url(${backgroundDesktopImage}) center center no-repeat;
        background-size: 100%;
        display: flex;
        align-items: center;
        .greetings-container {
            padding: 0 3.8rem;
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;

        }

        .greetings-container .image-container {
            padding: 0;
            flex: 1;
            justify-content: flex-end;
        }

        .greetings-container .image-container img {
            height: 35rem;
            margin: 0;
        }

        .greetings-container .info-container {
            margin: 0;
            flex: 1;
            align-items: start;
            gap: 1rem;
        }

        .greetings-container .info-container .title {
            font-size: 4rem;
            max-width: 500px;
        }

        .greetings-container .info-container .title span {
            color: #b96646;
        }

        .greetings-container .info-container .text {
            margin-bottom: 4rem;

            text-align: start;
            font-size: 1.2rem;
            line-height: 1.8rem;
        }

    }  

    @media(min-width: 1400px){
        display: flex;
        align-items: center;
        .greetings-container {
            max-width: 1440px;
            margin: 0 auto;

            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
        }

        .greetings-container .image-container {
            padding: 0;
            flex: 1;
            justify-content: flex-end;

        }

        .greetings-container .image-container img {
            height: 40rem;
        }

        .greetings-container .info-container {
            flex: 1;
            align-items: start;
            gap: 1rem;
        }

        .greetings-container .info-container .title {
            max-width: max-content;
            
            font-size: 6rem;
        }

        .greetings-container .info-container .text {
            margin-bottom: 4rem;
            
            text-align: start;
            font-size: 1.4rem;
            line-height: 1.8rem;
        }

    }    
`

