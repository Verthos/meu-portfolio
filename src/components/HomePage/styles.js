import styled from "styled-components"

export const StyledDiv = styled.div`
    background: var(--shape);
    height: 60vh;
    padding-left: 10rem; 
    padding-top: 20rem;
    align-items: center;
    justify-content: left;
    display: flex;
    font-size: 1.5rem;
    color: var(--black);
    text-align: left;


    @media (max-width: 600px) {
        padding-left: 2rem;
        padding-top: 20rem;
    }

    

    
    .bispo{
        opacity: 5%;
        position: absolute;
        transform: skew(30deg, -30deg);
        width: 30rem;
        right: 10vw;
        top: 20vw;
        @media (max-width: 1200px) {
            display: none;
        }
    }

    .dama{
        opacity: 5%;
        position: absolute;
        transform: skew(120deg, -120deg);
        right: 10vw;
        top: 5rem; 
        width: 10rem;
        @media (max-width: 1200px) {
            display: none;
        }
        
    }

    .cavalo{
        opacity: 5%;
        position: absolute;
        transform: skew(120deg, -120deg);
        left: 20vw;
        top: 30rem; 
        width: 15rem;
        @media (max-width: 1200px) {
            width: 22rem;
            transform: none;
            top: 8rem;
            left: 10vw;
            opacity: 10%;
        }
    }

    

    
        
    h1{
        margin-top: 1rem;
        margin-bottom: 5rem;
    }


    div{

        width: 40vw;

        h1{
            color: var(--black);
            text-align: left;
            font-size: 6rem;
        }

        h2{
            
            
            font-weight: normal;
            color: var(--black);
            text-align: left;
            line-height: 1rem;

        }

    
        @media (max-width: 600px) {
            h1 {
                font-size: 4rem;
            }
            width: 80%;
            h2 {
                font-size: 1.5rem;
            }
        }

    }
        


    span{
        color: var(--blue);
    }    


    section{

        span{
            font-weight: bold;
            left: 25vw;
            position: absolute;
            font-size: 10rem;
            opacity: 5%;
            text-align: left;
            color: var(--black);
        }
    }
`

export const StyledButton = styled.button`
    font-size: 0.8rem;
    margin: 0 auto;
    color: var(--shape);
    background: var(--blue);
    border-radius: 3rem;
    padding: 1rem;
    width: 10rem;
    border: none;
    font-weight: bold;
    box-shadow: 1px 1px 10px 1px var(--blue);
    margin-bottom: 5rem;
    cursor: pointer;
    z-index: 1;
    position: relative;

`

