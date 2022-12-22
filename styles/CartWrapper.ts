import styled from "styled-components";
import { accentColor, primaryColor, secondaryColor } from "./NavWrapper";


export const CartWrapper = styled.div`

    @media only screen and (max-width: 500px) {
        background-color: ${accentColor};
        width: 100%;
        height: 100%;
        padding: 100px 20px;
        display: flex;
        flex-direction: column;
        
        .noLeft {
            margin-top: 100px;
            margin-bottom: 200px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
        }
        .noItem {
            font-size: 24px;
            text-align: center;
            color: ${secondaryColor}
        }

        .backtomenu {

            background-color: ${primaryColor};
            border-radius: 16px;
            width: 300px;
            height: 48px;
            border: none;
            color: white
        }

        .shopItemList {
            display: flex;
            flex-direction: column;
            gap: 20px;

            
        }

        .shopItemList > * {
            box-shadow:0px 10px 10px 0px rgba(50, 50, 50, 0.08);
        }

        .totalCash {
            margin-top: 40px;
            background-color: white;
            border-radius: 16px;
            padding: 20px;
            box-shadow:0px 10px 10px 0px rgba(50, 50, 50, 0.08);

            h3 {
                font-size: 20px;
                color: ${secondaryColor}
            }

            .itemInfos {
                margin-top: 12px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                p {
                    color: ${secondaryColor};
                    font-weight: 550;
                }
            }

            .delivery {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                p {
                    margin-top: 8px;
                    color: ${secondaryColor}
                }

                
            }

            .totalMoney {
                margin-top: 8px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    p {
                        color: ${secondaryColor}
                    }
                }

            .buyTheFood {
                margin-top: 20px;
                width: 100%;
                height: 56px;
                background-color: ${primaryColor};
                border-radius: 12px;
                border: none;
                color: white;
                font-size: 20px;

            }
        }
    }

    @media only screen and (min-width: 500px) {
        background-color: ${accentColor};
        width: 100%;
        height: 80vh;
        padding: 100px 100px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .noLeft {
            width: 100%;
            
            margin-top: 100px;
            margin-bottom: 200px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
        }
        .noItem {
            font-size: 24px;
            text-align: center;
            color: ${secondaryColor}
        }

        .backtomenu {

            background-color: ${primaryColor};
            border-radius: 16px;
            width: 300px;
            height: 48px;
            border: none;
            color: white
        }

        .shopItemList {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        
        .shopItemList > * {
            width: 700px;
            box-shadow:0px 10px 10px 0px rgba(50, 50, 50, 0.08);
        }

        .totalCash {
            width: 400px;
            height: 300px;
            background-color: white;
            border-radius: 16px;
            padding: 32px 20px;
            box-shadow:0px 10px 10px 0px rgba(50, 50, 50, 0.08);

            h3 {
                font-size: 20px;
                color: ${secondaryColor}
            }

            .itemInfos {
                margin-top: 12px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                p {
                    color: ${secondaryColor};
                    font-weight: 550;
                }
            }

            .delivery {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                p {
                    margin-top: 8px;
                    color: ${secondaryColor}
                }

                
            }

            .totalMoney {
                margin-top: 8px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    p {
                        color: ${secondaryColor}
                    }
                }

            .buyTheFood {
                margin-top: 20px;
                width: 100%;
                height: 56px;
                background-color: ${primaryColor};
                border-radius: 12px;
                border: none;
                color: white;
                font-size: 20px;

            }
        }
    }
`