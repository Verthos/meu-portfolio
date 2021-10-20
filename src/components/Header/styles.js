import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    background: var(--gray);
    width: 100%;
    height: 8vh;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    
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

    nav{

        height: 8vh;
        position: relative;
        align-items: center;
        
        .nav-links{
            
            
        };

        a{
            cursor: pointer;
            padding: 0 2rem;
            text-decoration: none;
            font-size: 1.5rem;
            color: var(--shape);
            margin: 0 auto;
            &:first-child{
                margin-left: 3rem;
            }
        }
        
    }

`

export const Hamburger = styled.div`
    position: absolute;
    z-index: 1;
    cursor: pointer;
    left: 10%;
    top: 1.5rem;
    display: none;

    .line{
        width: 30px;
        height: 3px;
        background: var(--shape);
        margin: 5px;
    }

    @media (max-width: 768px){
        display: block;
    }

`

export const NavLinks = styled.ul`

    display: flex;
    list-style: none;
    height: 100%;
    justify-content: space-around;
    align-items: center;


    @media (max-width: 768px){
        left: 0;
        position: fixed;
        background: var(--gray);
        height: 100vh;
        width: 100%;
        flex-direction: column;
        clip-path: circle(100px at 90% -10%);
        -webkit-clip-path: circle(100px at 5% -10%);
        transition: all 1s ease-out;
        pointer-events: none;
    
                
            a{
                cursor: pointer;
                text-decoration: none;
                font-size: 2rem;
                color: var(--shape);
            }

        &.isOpen{
            clip-path: circle(1000px at 90% -10%);
            -webkit-clip-path: circle(1000px at 5% -10%);
            pointer-events: all
            
        }

      
    }
        

`





