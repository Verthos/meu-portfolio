import styled from "styled-components"

export const StyledDiv = styled.div`
    background: var(--shape);
    min-height: 130vh;
    padding-top: 4rem;
    align-items: center;
    justify-content: center;
    display: grid;


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
    
    @media (max-width: 600px) {
            h1{
                text-align: left;
                margin-bottom: 3rem;
                margin-left: 3rem;
            };
            h2{
                text-align: left;
            }
            display: flex;
            flex-direction: column;
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

        @media (max-width: 600px) {
            display: none;
        }
    }

    a{
        margin: 0 auto;
        color: var(--shape);
        text-decoration: none;
        text-decoration-color: none;
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
    margin-bottom: 5rem;


    @media (max-width: 600px) {
            margin-top: 4rem;
            margin-bottom: 2rem;
        }

`

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    grid-gap: 8rem;
    height: min-content;
    max-width: 70vw;

    p{
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    };

    img{
        height: 20rem;
        width: 20rem;
        border-radius: 1rem;
    }

    @media (max-width: 600px) {
            display: flex;
            flex-direction: column;
            grid-gap: 2rem;
        }

    
    ul{
        p{
            font-weight: bold;
            font-size: 1.5rem;
        }

        li{
            list-style: none;
            font-size: 1.3rem;
        }

    }
    
`


