import styled from "styled-components";
import { accentColor, primaryColor, secondaryColor } from "./NavWrapper";

export const MainWrapper = styled.div`

    @media only screen and (max-width:500px) {
        width: 100%;
        height: 100%;
        padding: 80px 20px;
        background-color: ${accentColor};
        scroll-behavior: smooth;
        z-index: 0;
     
       
        

        .modalBg {
            touch-action: none;
            transition: 0.400s;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: rgba(34, 51, 68, 0.333);
            z-index: 4;
            overflow: hidden;
          
           

        }

        .modalBgClosed {
       
       transition: 0.400s;
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 100vh;
       background-color: rgba(34, 51, 68, 0.333);
       opacity: 0;
       visibility: hidden;
       
       
    
      }


            .landingInfo {
               
                display: flex;
                flex-direction: column-reverse;

                .landingTexts {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    .landingTag {
                        width: max-content;
                        background-color: #FEE5E5;
                        border-radius: 20px;
                        font-size: 16px;
                        padding: 16px ;
                        color:${primaryColor};
                        font-weight: 600;
                     }

                     .landingHeadline {
                        margin-top: 12px;
                        text-align: center;
                        font-size: 36px;
                        line-height: 112%;
                        color: ${secondaryColor};

                        span{
                            color: ${primaryColor}
                        }
                     }

                     .landingSubText {
                        margin-top: 8px;
                        color: black;
                        opacity: 0.55;
                        text-align: center;
                     }

                     .landingBtns {
                        margin-top: 24px;
                        width: 100%;
                        padding: 0px 40px;
                        display: flex;
                        flex-direction: column;
                        gap: 12px;

                        .primaryBtn {
                            width: 100%;
                            height: 52px;
                            color: white;
                            font-size: 20px;
                            border-radius: 24px;
                            background-color: ${primaryColor};
                            border: none;
                            font-weight: 500;
                        }

                        .secondaryBtn {
                            width: 100%;
                            height: 52px;
                            color: ${primaryColor};
                            font-size: 20px;
                            border-radius: 24px;
                            background-color: transparent;
                            border: 1px solid ${primaryColor};
                            font-weight: 500;
                        }

                     }
                }

                 .landingPicContainer {
                     .landingPic {
                         position: relative;
                         width: 100%;
                         height: 360px;
                     }
                 }
                 }


            .ffHeadline {
                margin-top: 48px;
                font-size: 28px;
            } 
            
            .topFFList {
                gap: 24px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                margin-top: 20px;
                width: 100%;
                justify-content: space-between;
               
            }
         
        

    }

    //IPAD 

    @media only screen and (min-width:500px) {
        width: 100%;
        height: 100%;
        padding: 120px 40px;
        background-color: ${accentColor};
        scroll-behavior: smooth;
        z-index: 0;
  
       
        

        .modalBg {
            
            touch-action: none;
            transition: 0.400s;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: rgba(34, 51, 68, 0.333);
            z-index: 4;
            overflow-y: hidden ;
           

        }

        .modalBgClosed {
       
       transition: 0.400s;
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 100vh;
       background-color: rgba(34, 51, 68, 0.333);
       opacity: 0;
       visibility: hidden;
       
       
    
      }


            .landingInfo {
               
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .landingTexts {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    .landingTag {
                        width: max-content;
                        background-color: #FEE5E5;
                        border-radius: 20px;
                        font-size: 12px;
                        padding: 16px ;
                        color:${primaryColor};
                        font-weight: 600;
                     }

                     .landingHeadline {
                        margin-top: 12px;
                        font-size: 24px;
                        line-height: 112%;
                        color: ${secondaryColor};

                        span{
                            color: ${primaryColor}
                        }
                     }

                     .landingSubText {
                        margin-top: 8px;
                        color: black;
                        opacity: 0.55;
                        font-size: 16px;
                      
                     }

                     .landingBtns {
                        margin-top: 32px;
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        gap: 12px;

                        .primaryBtn {
                            width: 200px;
                            height: 48px;
                            color: white;
                            font-size: 12px;
                            border-radius: 28px;
                            background-color: ${primaryColor};
                            border: none;
                            font-weight: 500;
                        }

                        .secondaryBtn {
                            width: 200px;
                            height: 48px;
                            color: ${primaryColor};
                            font-size:12px;
                            border-radius: 28px;
                            background-color: transparent;
                            border: 1px solid ${primaryColor};
                            font-weight: 500;
                        }

                     }
                }

                 .landingPicContainer {
                    display: flex;
                    flex-direction: row;
                    justify-content: end;
                    align-items: flex-end;
                    width: 50%;
                  
                     .landingPic {
                         position: relative;
                         width: 280px;
                         height: 240px;
                       
                     }
                 }
                 }


            .ffHeadline {
                margin-top: 48px;
                font-size: 24px;
                color: ${secondaryColor};
            } 
            
            .topFFList {
                gap: 16px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                margin-top: 20px;
                width: 100%;
                justify-content: start;
                align-items: center;
                
               
            }
         
        

    }

    //laptop

    @media only screen and (min-width:769px) {
        width: 100%;
        height: 100%;
        padding: 60px 120px;
        background-color: ${accentColor};
        scroll-behavior: smooth;
        z-index: 0;
  
       
        

        .modalBg {
            
            touch-action: none;
            transition: 0.400s;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: rgba(34, 51, 68, 0.333);
            z-index: 4;
            overflow-y: hidden ;
           

        }

        .modalBgClosed {
       
       transition: 0.400s;
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 100vh;
       background-color: rgba(34, 51, 68, 0.333);
       opacity: 0;
       visibility: hidden;
       
       
    
      }


            .landingInfo {
               
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .landingTexts {
                    width: 36vw;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    .landingTag {
                        width: max-content;
                        background-color: #FEE5E5;
                        border-radius: 20px;
                        font-size: 16px;
                        padding: 16px ;
                        color:${primaryColor};
                        font-weight: 600;
                     }

                     .landingHeadline {
                        margin-top: 12px;
                        font-size: 56px;
                        line-height: 112%;
                        color: ${secondaryColor};

                        span{
                            color: ${primaryColor}
                        }
                     }

                     .landingSubText {
                        margin-top: 8px;
                        color: black;
                        opacity: 0.55;
                        font-size: 20px;
                      
                     }

                     .landingBtns {
                        margin-top: 32px;
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        gap: 12px;

                        .primaryBtn {
                            width: 40%;
                            height: 52px;
                            color: white;
                            font-size: 20px;
                            border-radius: 24px;
                            background-color: ${primaryColor};
                            border: none;
                            font-weight: 500;
                        }

                        .secondaryBtn {
                            width: 40%;
                            height: 52px;
                            color: ${primaryColor};
                            font-size: 20px;
                            border-radius: 24px;
                            background-color: transparent;
                            border: 1px solid ${primaryColor};
                            font-weight: 500;
                        }

                     }
                }

                 .landingPicContainer {
                    display: flex;
                    flex-direction: row;
                    justify-content: end;
                    align-items: flex-end;
                    width: 50%;
                  
                     .landingPic {
                         position: relative;
                         width: 600px;
                         height: 600px;
                       
                     }
                 }
                 }


            .ffHeadline {
                margin-top: 48px;
                font-size: 36px;
                color: ${secondaryColor};
            } 
            
            .topFFList {
                gap: 16px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                margin-top: 20px;
                width: 100%;
                justify-content: start;
                align-items: center;
                
               
            }
         
        

    }


    //desktop
    
    @media only screen and (min-width:1401px) {
        width: 100%;
        height: 100%;
        padding: 60px 120px;
        background-color: ${accentColor};
        scroll-behavior: smooth;
        z-index: 0;
  
       
        

        .modalBg {
            
            touch-action: none;
            transition: 0.400s;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: rgba(34, 51, 68, 0.333);
            z-index: 4;
            overflow-y: hidden ;
           

        }

        .modalBgClosed {
       
       transition: 0.400s;
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 100vh;
       background-color: rgba(34, 51, 68, 0.333);
       opacity: 0;
       visibility: hidden;
       
       
    
      }


            .landingInfo {
               
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .landingTexts {
                    width: 36vw;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    .landingTag {
                        width: max-content;
                        background-color: #FEE5E5;
                        border-radius: 20px;
                        font-size: 16px;
                        padding: 16px ;
                        color:${primaryColor};
                        font-weight: 600;
                     }

                     .landingHeadline {
                        margin-top: 12px;
                        font-size: 56px;
                        line-height: 112%;
                        color: ${secondaryColor};

                        span{
                            color: ${primaryColor}
                        }
                     }

                     .landingSubText {
                        margin-top: 8px;
                        color: black;
                        opacity: 0.55;
                        font-size: 20px;
                      
                     }

                     .landingBtns {
                        margin-top: 32px;
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        gap: 12px;

                        .primaryBtn {
                            width: 40%;
                            height: 52px;
                            color: white;
                            font-size: 20px;
                            border-radius: 24px;
                            background-color: ${primaryColor};
                            border: none;
                            font-weight: 500;
                        }

                        .secondaryBtn {
                            width: 40%;
                            height: 52px;
                            color: ${primaryColor};
                            font-size: 20px;
                            border-radius: 24px;
                            background-color: transparent;
                            border: 1px solid ${primaryColor};
                            font-weight: 500;
                        }

                     }
                }

                 .landingPicContainer {
                    display: flex;
                    flex-direction: row;
                    justify-content: end;
                    align-items: flex-end;
                    width: 50%;
                  
                     .landingPic {
                         position: relative;
                         width: 600px;
                         height: 600px;
                       
                     }
                 }
                 }


            .ffHeadline {
                margin-top: 48px;
                font-size: 36px;
                color: ${secondaryColor};
            } 
            
            .topFFList {
                gap: 24px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                margin-top: 20px;
                width: 100%;
                justify-content: start;
                align-items: center;
                
               
            }
         
        

    }
`