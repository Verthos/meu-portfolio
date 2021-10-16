import styled from "styled-components"

export const StyledDiv = styled.div`
    background: var(--shape);
    width: 100vw;
    height: 120vh;
    padding-top: 4rem;
    align-items: center;
    justify-content: center;
    display: grid;

    p{
        color: var(--black);
        text-align: center;
        line-height: 3rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }

    p{
        h1{
            line-height: 0.7;
            color: var(--black);
            text-align: center;
            font-size: 5rem;
        }

        h2{
            margin-left: -5rem;
            font-weight: normal;
            color: var(--black);
            text-align: center;

        }
    }



    span{
        color: orange;
    }    


    section{
        span{
            font-weight: bold;
            left: 35vw;
            position: absolute;
            font-size: 10rem;
            opacity: 15%;
            text-align: center;
            color: var(--black);
            text-shadow: 10px 10px 10px var(--black);
        }
    }
`

export const StyledButton = styled.button`
    font-size: 0.8rem;
    margin: 0 auto;
    color: var(--shape);
    background: var(--orange);
    border-radius: 3rem;
    padding: 1rem;
    width: 10rem;
    border: none;
    font-weight: bold;
    box-shadow: 1px 1px 10px 1px var(--orange);
    margin-bottom: 5rem;
`

export const Container = styled.div`
    display: flex;
    grid-gap: 3rem;


    img{
        height: 25rem;
        width: 25rem;
        border-radius: 1rem;
    }
`