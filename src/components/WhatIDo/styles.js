import styled from "styled-components"

export const StyledDiv = styled.div`
    background: var(--shape);
    height: 70vh;
    padding: 4rem;
    padding-left: 10rem;
    justify-content: center;
    height: min-content;

    @media (max-width: 600px) {
            padding-left: 2rem;
        }
        
    h1{
        line-height: 0.7;
        color: var(--black);
        text-align: left;
        font-size: 4rem;
    }

    h2{
        font-weight: normal;
        color: var(--black);
        text-align: left;

    }

    



    span{
        color: var(--blue);
    }    

    section{
        span{
            font-weight: bold;
            position: absolute;
            font-size: 10rem;
            opacity: 5%;
            text-align: left;
            color: var(--black);        
        }
        @media (max-width: 500px) {
            display: none;
        }
        
    }
`

export const Container = styled.div`
    margin-top: 6rem;
    display: flex;
    grid-gap: 5rem;


    @media (max-width: 600px) {
            display: flex;
            flex-direction: column;
            grid-gap: 2rem;
        }

    
    ul{
        p{
            font-weight: bold;
            font-size: 2rem;
        }

        li{
            list-style: none;
            font-size: 1.5rem;
        }

    }
`