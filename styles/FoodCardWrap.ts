
import styled from "styled-components";
import { primaryColor, secondaryColor } from "./NavWrapper";

export const FoodCardWrapper = styled.div`
    @media only screen and (max-width:500px) {
        display: flex;
        flex-direction: column;
        width: 164px;
        height: 300px;
        padding: 16px 12px;
        background-color: white;
        border-radius: 16px;
        box-shadow:0px 10px 16px 0px rgba(50, 50, 50, 0.10);


        .fImgContainer {
            .fImg {
                position: relative;
                width: 100%;
                height: 88px;
            }
        }

        .fName {
            margin-top: 8px;
            font-size: 16px;
            font-weight: 600;
            color: ${secondaryColor};

        }

        .fInfo {
            font-size: 12px;
            opacity: 0.55;
            color: black;
            margin-top: 4px;
        }

        .fPrice {
            margin-top: 12px;
           font-weight: 600;
           font-size: 16px;

        }

        .buyBtn {
            margin-top: 12px;
            width: 100%;
            height: 48px;
            color: white;
            padding: 4px;
            background-color: ${primaryColor};
            border-radius: 12px;
            border: none;
            font-size: 16px;

        }
    }

    //IPAD 
    @media only screen and (min-width:500px) {
        display: flex;
        flex-direction: column;
        width: 220px;
        height: 356px;
        padding: 16px 17px;
        background-color: white;
        border-radius: 16px;
        box-shadow:0px 10px 16px 0px rgba(50, 50, 50, 0.10);


        .fImgContainer {
            padding: 0px 20px;
            .fImg {
                position: relative;
                width: 100%;
                height: 114px;
            }
        }

        .fName {
            margin-top: 12px;
            font-size: 20px;
            font-weight: 600;
            color: ${secondaryColor};

        }

        .fInfo {
            font-size: 16px;
            opacity: 0.55;
            color: black;
            margin-top: 4px;
        }

        .fPrice {
            margin-top: 28px;
           font-weight: 600;
           font-size: 20px;
           color: ${secondaryColor};

        }

        .buyBtn {
            
            margin-top: 12px;
            width: 100%;
            height: 48px;
            color: white;
            padding: 4px;
            background-color: ${primaryColor};
            border-radius: 12px;
            border: none;
            font-size: 16px;
           

        }
    }


    //laptop
    @media only screen and (min-width:769px) {
        display: flex;
        flex-direction: column;
        width: 272px;
        height: 420px;
        padding: 16px 24px;
        background-color: white;
        border-radius: 16px;
        box-shadow:0px 10px 16px 0px rgba(50, 50, 50, 0.10);


        .fImgContainer {
            .fImg {
                position: relative;
                width: 100%;
                height: 148px;
            }
        }

        .fName {
            margin-top: 12px;
            font-size: 20px;
            font-weight: 600;
            color: ${secondaryColor};

        }

        .fInfo {
            font-size: 16px;
            opacity: 0.55;
            color: black;
            margin-top: 4px;
        }

        .fPrice {
            margin-top: 28px;
           font-weight: 600;
           font-size: 20px;
           color: ${secondaryColor};

        }

        .buyBtn {
            
            margin-top: 12px;
            width: 100%;
            height: 48px;
            color: white;
            padding: 4px;
            background-color: ${primaryColor};
            border-radius: 12px;
            border: none;
            font-size: 16px;
           

        }
    }


     //desktop
     @media only screen and (min-width:1400px) {
        display: flex;
        flex-direction: column;
        width: 290px;
        height: 420px;
        padding: 16px 24px;
        background-color: white;
        border-radius: 16px;
        box-shadow:0px 10px 16px 0px rgba(50, 50, 50, 0.10);


        .fImgContainer {
            .fImg {
                position: relative;
                width: 100%;
                height: 168px;
            }
        }

        .fName {
            margin-top: 12px;
            font-size: 20px;
            font-weight: 600;
            color: ${secondaryColor};

        }

        .fInfo {
            font-size: 16px;
            opacity: 0.55;
            color: black;
            margin-top: 4px;
        }

        .fPrice {
            margin-top: 28px;
           font-weight: 600;
           font-size: 20px;
           color: ${secondaryColor};

        }

        .buyBtn {
            
            margin-top: 12px;
            width: 100%;
            height: 48px;
            color: white;
            padding: 4px;
            background-color: ${primaryColor};
            border-radius: 12px;
            border: none;
            font-size: 16px;
           

        }
    }

    
`