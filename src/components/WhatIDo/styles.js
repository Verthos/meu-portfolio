import styled from "styled-components"

export const StyledDiv = styled.div`
    background: var(--shape);
    width: 100vw;
    height: 70vh;
    padding: 4rem;
    padding-left: 10rem;
    justify-content: center;


    p{
        height: min-content;
        h1{
            line-height: 0.7;
            color: var(--black);
            text-align: left;
            font-size: 5rem;
        }

        h2{
            font-weight: normal;
            color: var(--black);
            text-align: left;

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
            opacity: 10%;
            text-align: left;
            color: var(--black);
        }
    }
`

export const Container = styled.div`
    margin-top: 6rem;
    display: flex;
    grid-gap: 5rem;

    
    ul{
        h1{
            font-size: 2rem;
        }

        li{
            list-style: none;
            font-size: 1.5rem;
        }

    }
`