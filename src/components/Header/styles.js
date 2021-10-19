import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    height: 8vh;
    background: var(--gray);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 2rem;

    Link{
        
    }

    .lingua{
        display: flex;
    }
    .false{
        transition: filter 0.5s;
        filter: opacity(0.3);
        }

    img{
        margin: 0.2rem;
        width: 2rem;
        border-radius: 2rem;
        cursor: pointer;
        transition: transform 1s;

        &:hover{
            filter: brightness(1.2);
            transform: skew(20deg, -20deg);
        }
        
    }

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

        .about{
            display: none;
        }
        justify-content: center;
        a{
            &:first-child{
                margin: 0 auto;
            }
        }
    }


`




