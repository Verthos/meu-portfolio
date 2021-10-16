import styled from "styled-components"

export const StyledFooter = styled.footer`

    background: var(--gray);
    width: 100vw;
    height: 75vh;
    bottom: 0;
    padding-top: 5rem;
    justify-content: center;
    display: grid;

    p{
        font-size: 1.2rem;
        width: 25vw;
        color: var(--shape);
        text-align: center;
        line-height: 2rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }

    h1{
        font-size:3rem;
        color: var(--shape);
        text-align: center;
    }

    img{
        width: 7rem;
        
        border-radius: 2rem;
        margin: 0 auto;
        

    }

    

    div{

    }
    span{
        color: var(--blue);
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
    box-shadow: 1px 1px 10px  var(--shape);
    margin-bottom: 5rem;
`

export const SocialDiv = styled.div`

    display: flex;
    justify-content: center;
    grid-gap: 1rem;
    margin-bottom: 2rem;

    .instagram{
        color: white;
        position: relative;
        transition: filter 0.3s;
        transition: transform 1s;

        &:hover{
            filter: brightness(1.2);
            transform: skew(20deg, -20deg);
        }
    }

    .linkedin{
        color: #003d80;
        position: relative;
        transition: filter 0.3s;
        transition: transform 1s;
        text-shadow: 10px 10px 10px ;
        &:hover{
            filter: brightness(1.2);
            transform: skew(20deg, -20deg);
        }

    }

    .github{
        color: #cccccc;
        position: relative;
        transition: filter 0.3s;
        transition: transform 1s;
        text-shadow: 10px 10px 10px white;

        &:hover{
            filter: brightness(1.2);
            transform: skew(20deg, -20deg);
        }
    }
`

