import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    height: 10vh;
    background: var(--gray);
    z-index: 1;
    display: flex;
    align-items: center;

    a{
        cursor: pointer;
        text-decoration: none;
        margin: 0 1rem;
        font-size: 1.3rem;
        color: var(--shape);
        &:first-child{
            margin-left: 10rem;
        }
    }


`




