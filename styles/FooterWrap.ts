import styled from "styled-components";
import { primaryColor, secondaryColor } from "./NavWrapper";

export const FooterWrap = styled.div`

    @media only screen and (max-width: 600px) {
       
        background-color: white;
        padding: 20px;
        display: flex;
        flex-direction: column;
        z-index: 6;
        bottom: 0;
      

        .logoFooter {
            color: ${secondaryColor};
            font-size: 12px;
            font-weight: 800;
           
            span {
                color: ${primaryColor};
                
            }
        }

        .footerItems {
            margin-top: 28px;
            display: flex;
            flex-direction: column;
            gap: 8px;
             p { 
            font-size: 16px ;
            color: ${secondaryColor}
        }
        }

        .rights {
            margin-top: 28px;
            color: gray;
            font-size: 14px;
        }
    }

    @media only screen and (min-width: 600px) {
        background-color: white;
        padding: 20px 120px;
        display: flex;
        flex-direction: column;
        z-index: 4;
      
        .fMain {
            display: flex;
            flex-direction: row;
            align-items:baseline;
        }
        .logoFooter {
            color: ${secondaryColor};
            font-size: 12px;
            font-weight: 800;
           
            span {
                color: ${primaryColor};
                
            }
        }

        .footerItems {
            width: 80%;
            margin-top: 28px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 12px;
             p { 
            font-size: 18px ;
            color: ${secondaryColor};
            font-weight: 550;
        }
        }

        .rights {
            margin-top: 32px;
            color: gray;
            font-size: 14px;
            text-align: center;
        }
    }

`