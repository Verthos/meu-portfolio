import styled from "styled-components"

export const StyledDiv = styled.div`
    min-height: 120vh;
    width: 80vw;
    max-width: 80vw;
    align-items: center;
    justify-content: right;
    display: flex;    

    
    @media(max-width: 600px){
            padding-left: 2rem;
            justify-content: left;
            padding-right: 2rem;
        }

    p{
        font-size: 1.5rem;
        color: var(--black);
        line-height: 2rem;
        

        @media(max-width: 600px){
            padding-left: 1rem;
            justify-content: left;
            padding-right: 1rem;
            font-size: 1.4rem;
            
        }
    }


    div{
        
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


        @media(max-width: 600px){
            width: 80vw;
            h1{
            line-height: 4rem;
            color: var(--black);
            text-align: left;
            font-size: 5rem;
            margin-top: 8rem;
        }
        }
    }    


    p{
        position: relative;

        h1{
            line-height: 10rem;
            color: var(--black);
            font-size: 5rem;
        }

        h2{
            font-weight: normal;
            color: var(--black);
        }
    }


    span{
        color: var(--blue);
    }    


    section{
        
        position: relative;
        top: -20rem;
        span{
            
            font-weight: bold;
            position: absolute;
            font-size: 10rem;
            opacity: 5%;
            text-align: left;
            color: var(--black);
            width: 50rem;

            
        }
        @media (max-width: 600px) {
            display: none;
        }
    }
   

    
`