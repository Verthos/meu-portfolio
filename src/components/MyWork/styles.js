import styled from "styled-components"

export const StyledDiv = styled.div`
    background: var(--shape);
    height: 130vh;
    padding-top: 4rem;
    align-items: center;
    justify-content: center;
    display: grid;

    p{
        h1{
            line-height: 0.7;
            color: var(--black);
            text-align: right;
            font-size: 5rem;
        }

        h2{
            font-weight: normal;
            color: var(--black);
            text-align: right;

        }
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
            color: var(--black);
            right: 20rem;
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
    box-shadow: 1px 1px 10px 1px var(--cyan);
    margin-bottom: 5rem;
    


`

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    grid-gap: 3rem;
    max-width: 70vw;
    justify-content: center;
    

    img{
        height: 20rem;
        width: 20rem;
        border-radius: 1rem;
    }
`