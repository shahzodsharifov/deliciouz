import styled from "styled-components";
import { accentColor, secondaryColor } from "./NavWrapper";

export const ContactsWrap = styled.div`

    @media only screen and (max-width:600px) {

        background-color: ${accentColor};
        padding: 100px 20px;
        height: 100vh;
        

        .contactsContainer {
            
            width: 100%;
            height: 160px;
            padding: 16px;
            background-color: white;
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            justify-content: center;
            box-shadow:         0px 10px 20px 0px rgba(50, 50, 50, 0.06);

            .cHeader {
                font-weight: 600;
                font-size: 28px;
                color: ${secondaryColor}

            }

            .cSub {
                font-size: 14px;
                color: gray;

                span {
                    font-weight: 600;
                    color: black;
                }

               
            }

            .cInfo {
                    font-size: 14px;
                    color: ${secondaryColor};
                }
        }
    }


@media only screen and (min-width:600px) {

background-color: ${accentColor};
padding: 100px 100px;
height: 100vh;


.contactsContainer {
  
    width: 600px;
    height: 300px;
    padding: 32px;
    background-color: white;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow:0px 10px 20px 0px rgba(50, 50, 50, 0.06);

    .cHeader {
        font-weight: 600;
        font-size: 28px;
        color: ${secondaryColor}

    }

    .cSub {
        font-size: 20px;
        color: gray;

        span {
            font-weight: 600;
            color: black;
        }

        .cInfo {
            font-size: 20px;
            color: ${secondaryColor};
        }
    }
}
}

`