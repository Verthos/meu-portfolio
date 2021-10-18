import styled from "styled-components"

export const StyledDiv = styled.div`
    background: var(--shape);
    width: 100vw;
    height: 100vh;
    padding-left: 10rem; 
    padding-top: 4rem;
    align-items: center;
    justify-content: left;
    display: flex;

    

    p{
        font-size: 1.5rem;
        color: var(--black);
        text-align: left;
        margin-bottom: 5rem;
        margin-top: 1rem;
    }


    div{

        width: 40vw;

        p{
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
            opacity: 10%;
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

