import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    min-height: 100vh;

    margin-top: 10rem;

    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;

    
    section{
        width: 80vw;
        max-width: 80%;
        display: flex;
        flex-direction: column;

        
    }
    

    img{
        position: relative;
        width: 80%;
        border-radius: 1rem;
        left: 10%;
        box-shadow: 2px 2px 5rem 2px var(--soft-black);

    }

    .description{
       
        
    }
    .titulo{
        display: flex;
        position: relative;
        height: 3rem;
        align-items: flex-end;
        justify-content: space-around;
        top: -15rem;

        h1{
            font-size: 4rem;
        }

    }

`