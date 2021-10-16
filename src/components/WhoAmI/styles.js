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


    .bispo{
        opacity: 5%;
        position: absolute;
        transform: skew(30deg, -30deg);
        right: 10vw;
    }

    .dama{
        opacity: 5%;
        position: absolute;
        transform: skew(120deg, -120deg);
        right: 10vw;
        top: 5rem; 
        width: 15rem;
        
    }

    .cavalo{
        opacity: 5%;
        position: absolute;
        transform: skew(120deg, -120deg);
        left: 15vw;
        top: 30rem; 
        width: 20rem;
    }




    p{
        font-size: 1.5rem;
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

