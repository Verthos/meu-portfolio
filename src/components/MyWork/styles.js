import styled from "styled-components"

export const StyledDiv = styled.div`
    background: var(--shape);
    width: 100vw;
    height: 100vh;
    padding-left: 10rem; 
    padding-top: 4rem;
    align-items: center;
    justify-content: left;
    display: grid;

    p{
        color: var(--black);
        text-align: left;
        line-height: 2rem;
        margin-bottom: 5rem;
        margin-top: 1rem;
    }

div{

    width: 50vw;

    p{
        width: 40vw;
        h1{
            line-height: 10rem;
            color: var(--black);
            text-align: left;
            font-size: 5rem;
        }

        h2{
            
            font-weight: normal;
            color: var(--black);
            text-align: left;
            line-height: 1rem;

        }
    }
    //← →
    nav{
        margin-right: 0;
        position: relative;
        button{
            margin-left: 1rem;
            font-size:1rem;
            padding: 0.7rem;
            border-radius: 3rem;
            border-color: var(--orange);
            color: var(--orange);
            border-width: 1px;
            &:hover{
                background: var(--orange);
                color: var(--shape)
            }
        }
        
    }

}    


    p{

        h1{
            line-height: 10rem;
            color: var(--black);
            text-align: left;
            font-size: 5rem;
        }

        h2{
            
            font-weight: normal;
            color: var(--black);
            text-align: left;
            line-height: 1rem;

        }
    }
    //← →
    nav{
        button{
            padding: 1rem;
            border-radius: 5rem;
        }
    }


    span{
        color: var(--cyan);
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