import styled from "styled-components"

export const StyledDiv = styled.div`
    background: var(--shape);
    width: 100vw;
    height: 100vh;
    padding-left: 5rem; 
    padding-top: 4rem;
    align-items: center;
    justify-content: right;
    display: grid;


    .bispo{
        opacity: 5%;
        position: absolute;
        transform: skew(30deg, -30deg);
        width: 30rem;
        right: 10vw;
        top: 20vw;
    }

    .dama{
        opacity: 5%;
        position: absolute;
        transform: skew(120deg, -120deg);
        right: 10vw;
        top: 5rem; 
        width: 10rem;
        
    }

    .cavalo{
        opacity: 5%;
        position: absolute;
        transform: skew(120deg, -120deg);
        left: 15vw;
        top: 30rem; 
        width: 15rem;
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
    }
`

