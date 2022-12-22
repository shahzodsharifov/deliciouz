import styled from "styled-components";
import { accentColor, secondaryColor } from "./NavWrapper";


export const CartItemWrap = styled.div`

    @media only screen and (max-width:500px) {
        width: 100%;
        height: 160px;
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 20px;
        border-radius: 16px;

        .cartStuff {
            display: flex;
            flex-direction: row;
            gap: 20px;


            .cartInfo {
                .itemName {
                    margin-bottom: 8px;
                    color: ${secondaryColor}
                }
                p {
                    
                    opacity: 0.45;
                    font-size: 14px;
                    color: ${secondaryColor};

                }
            }
        }
        .cartThumbContainer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 72px;
            height: 72px;
            border-radius: 16px;
            overflow: hidden;
            background-color: ${accentColor};
           
            
            .cartThumb {
                position: relative;
                width: 66px;
                height: 52px;
            }
        }

        .cartActions {
            margin-top: 12px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .itemPrice {
                font-size: 20px;
                font-weight: 550;
                color: ${secondaryColor};
            }

            .itemButton {
                display: flex;
                width: 100px;
                height: 44px;
                border: 1px solid ${secondaryColor};
                border-radius: 12px;
                justify-content: space-between;
                align-items: center;
                padding: 12px;
                font-size: 18px;
                color: ${secondaryColor}

            }
        }
    }

    //desktop 

    
    @media only screen and (min-width:500px) {
        width: 100%;
        height: 160px;
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 20px;
        border-radius: 16px;

        .cartStuff {
            display: flex;
            flex-direction: row;
            gap: 20px;


            .cartInfo {
                .itemName {
                    margin-bottom: 8px;
                    color: ${secondaryColor}
                }
                p {
                    
                    opacity: 0.45;
                    font-size: 14px;
                    color: ${secondaryColor};

                }
            }
        }
        .cartThumbContainer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 72px;
            height: 72px;
            border-radius: 16px;
            overflow: hidden;
            background-color: ${accentColor};
           
            
            .cartThumb {
                position: relative;
                width: 66px;
                height: 52px;
            }
        }

        .cartActions {
            margin-top: 12px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .itemPrice {
                font-size: 20px;
                font-weight: 550;
                color: ${secondaryColor};
            }

            .itemButton {
                display: flex;
                width: 100px;
                height: 44px;
                border: 1px solid ${secondaryColor};
                border-radius: 12px;
                justify-content: space-between;
                align-items: center;
                padding: 12px;
                font-size: 18px;
                color: ${secondaryColor}

            }
        }
    }

`