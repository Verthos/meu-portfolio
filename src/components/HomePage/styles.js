import styled from "styled-components"

export const StyledDiv = styled.div`
    height: 60vh;
    padding-left: 10rem; 
    padding-top: 20rem;
    align-items: center;
    justify-content: left;
    display: flex;
    color: var(--black);
    text-align: left;
    
    .tecnologies{
        position: absolute;
        right: 0;
        justify-content:right;

        .reactIcon, .nextIcon{
            width: 4rem;
        }

        @media (max-width: 600px){
            display: grid;
            flex-direction: column;
        }
        

    }



    img{
        right: 10rem;
        position: relative;
        margin:  1rem;
        width: 6rem;
        @media (max-width: 600px){
            right: 0rem;
            width: 3rem;
        }

    }

    @media (max-width: 600px) {
        padding-left: 2rem;
        padding-top: 20rem;
    }

    
        
    h1{
        margin-top: 1rem;
        margin-bottom: 5rem;


        @media (max-width: 600px) {
            h1 {
                font-size: 3.5rem;
            }
        }
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
                font-size: 3.5rem;
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

