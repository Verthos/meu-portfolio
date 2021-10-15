import styled from "styled-components";

export const StyledHeader = styled.div`

height: 70vh;
width: 100vw;
background: var(--shape);
align-items: center;
justify-content: center;
display: flex;
padding-right: 15rem;
padding-left: 15rem;


@media (max-width: 450px){
    
    
    margin: 0 auto;
    padding: 0.25rem;
    background: var(--soft-black);
    
}



img{
    display: block;
    border-radius: 1rem;
    box-shadow: 5px 10px 50px #8F8EBF;
    max-width: 24rem;
    max-height: 24rem;
    z-index: 1;
    position: relative;
    left: 5vw;
    
    
    @media (max-width: 1000px){
        left: 1vw;
    }

    @media (max-width: 450px){
        bottom: -5rem;
        margin: 0 auto;
        position: relative;
        max-width: 75%;
        max-height: 75%;
    }
}


nav{
    text-shadow: 2px 2px 5px #8F8EBF;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    padding: 0.5rem;
    padding-left: 1rem;
    background: var(--soft-black);
    height: 6rem;
    color: var(--shape);
    position: relative;
    width: 60%;
    text-align: right;
    border-radius: 0.2rem;
    min-width: 20rem;
    bottom: -5rem;



    p{
        font-size: 1.2rem;
        position: relative;
        top: 0;
        right: 0;
    }

    h1{
        font-size: 2.5rem;
    }

    


    @media (max-width: 450px){
        position: absolute;
        width: 100%;
        text-align: center;
        padding: 0;
        top:0;
        right: 0;
        p{
        font-size: 2rem;
        position: relative;
        top: 2.5rem;
    }
        h1{
        font-size: 2.5rem;
        bottom: 0rem;
        line-height: 3.5;
    }
}

}




`




