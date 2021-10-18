import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    height: 8vh;
    background: var(--gray);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    a{
        cursor: pointer;
        text-decoration: none;
        margin: 0 1rem;
        font-size: 1.2rem;
        color: var(--shape);
        &:first-child{
            margin-left: 10rem;
        }
    }

    @media(max-width: 600px){
        a{
            &:first-child{
                margin: 0 auto;
        }

        
        
        }
    }


`




