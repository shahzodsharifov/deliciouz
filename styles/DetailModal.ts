import styled from "styled-components";
import { primaryColor, secondaryColor } from "./NavWrapper";


export const DetailModalWrapper = styled.div`

    @media only screen and (max-width: 500px) {
     

        .modalOpen {
        width: 100%;
        height: 85%;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: white;
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;
        z-index: 6;
        padding: 20px;
        transition: 0.400s;
        overflow: visible !important;
        touch-action: none;
        .cross {
          
            display: flex;
            flex-direction: row-reverse;
          
            width: 100%;
            .crossContainer {
                position: relative;
                width: 36px;
                height: 36px;
            }
        }

        .foodPicContainer {
            .foodPic {
                position: relative;
                width: 100%;
                height: 30vh;
            }
        }

        .foodNameModal {
            margin-top: 20px;
            color: ${secondaryColor};

        }

        .foodInfoModal {
            margin-top: 4px;
        }

        .foodInfoModal {
            color: black;
            opacity: 0.65;
        }

        .drinking {
            margin-top: 20px;
            font-weight: 600;
            font-size: 20px;
            color: ${secondaryColor};
        }

        .dChoices {
            margin-top: 16px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            .coke {
            display: flex;
            flex-direction: row;
            gap: 12px;
            align-items: center;
            color: ${secondaryColor};

            .cokeInput {
                width: 24px;
                height: 24px;
                accent-color: ${primaryColor};
            }
        }
        }
        .totalPrice {
            margin-top: 60px;
            font-size: 24px;
            font-weight: 600;
            color: ${secondaryColor};
                
            }

        .modalBtns {
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            

            .addBtn {
                display: flex;
                width: 160px;
                justify-content: space-between;
                font-size: 24px;
                padding: 12px;
                border-radius: 12px;
                border: 1px solid ${secondaryColor};
                font-weight: 600;
                color: ${secondaryColor};

                
                .uclickable {
                    pointer-events: none;
                    
                }

                .click {
                  
                    pointer-events: none;
                }

            }

        

            .buyBtnModal {
                width: 180px;
                border-radius: 12px;
                background-color: ${primaryColor};
                border: none;
                font-size: 20px;
                color: white;
                font-weight: 600;
            }
        }
        }

        .modalClosed {
        transition: 0.400s;
        width: 100%;
        height: 85%;
        position: fixed;
        bottom: -100%;
        left: 0;
        background-color: white;
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;
        z-index: 4;
        padding: 20px;
        overflow: hidden;

        .cross {
          
            display: flex;
            flex-direction: row-reverse;
          
            width: 100%;
            .crossContainer {
                position: relative;
                width: 36px;
                height: 36px;
            }
        }

        .foodPicContainer {
            .foodPic {
                position: relative;
                width: 100%;
                height: 30vh;
            }
        }

        .foodNameModal {
            margin-top: 20px;
            color: ${secondaryColor};

        }

        .foodInfoModal {
            color: black;
            opacity: 0.65;
        }

        .drinking {
            margin-top: 20px;
            font-weight: 600;
            font-size: 20px;
        }

        .dChoices {
            margin-top: 16px;
            display: flex;
            flex-direction: column;
            gap: 16px;
           
            .coke {
            display: flex;
            flex-direction: row;
            gap: 12px;
            align-items: center;
            color: ${secondaryColor};

            .cokeInput {
                width: 24px;
                height: 24px;
                accent-color: ${primaryColor};
            }
        }
        }
        .totalPrice {
            margin-top: 32px;
            font-size: 24px;
            font-weight: 600;
            color: ${secondaryColor}
                
            }

        .modalBtns {
            margin-top: 12px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            

            .addBtn {
                display: flex;
                width: 160px;
                justify-content: space-between;
                font-size: 24px;
                padding: 12px;
                border-radius: 12px;
                border: 1px solid ${secondaryColor};
                font-weight: 600;

                p {
                    color: red
                }
            }

        

            .buyBtnModal {
                width: 180px;
                border-radius: 12px;
                background-color: ${primaryColor};
                border: none;
                font-size: 20px;
                color: white;
                font-weight: 600;
            }
        }
        }
    }

    //IPAD

    @media only screen and (min-width: 500px) {
     

     .modalOpen {
     width: 100%;
     height: 90%;
     position: fixed;
     bottom: 0;
     left: 0;
     background-color: white;
     border-top-right-radius: 16px;
     border-top-left-radius: 16px;
     z-index: 6;
     padding: 20px 40px;
     transition: 0.400s;
     overflow: visible !important;
     touch-action: none;
     .cross {
       
         display: flex;
         flex-direction: row-reverse;
       
         width: 100%;
         .crossContainer {
             position: relative;
             width: 36px;
             height: 36px;
         }
     }

     .foodPicContainer {
        padding: 0px 80px;
         .foodPic {
             position: relative;
             width: 100%;
             height: 30vh;
         }
     }

     .foodNameModal {
         margin-top: 20px;
         color: ${secondaryColor};

     }

     .foodInfoModal {
         margin-top: 4px;
     }

     .foodInfoModal {
         color: black;
         opacity: 0.65;
     }

     .drinking {
         margin-top: 20px;
         font-weight: 600;
         font-size: 20px;
         color: ${secondaryColor}
     }

     .dChoices {
         margin-top: 16px;
         display: flex;
         flex-direction: column;
         gap: 16px;
         .coke {
         display: flex;
         flex-direction: row;
         gap: 12px;
         align-items: center;
         color: ${secondaryColor};

         .cokeInput {
             width: 24px;
             height: 24px;
             accent-color: ${primaryColor};
         }
     }
     }
     .totalPrice {
         margin-top: 40px;
         font-size: 24px;
         font-weight: 600;
         color: ${secondaryColor}
             
         }

     .modalBtns {
         margin-top: 16px;
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         

         .addBtn {
             display: flex;
             width: 160px;
             justify-content: space-between;
             font-size: 24px;
             padding: 12px;
             border-radius: 12px;
             border: 1px solid ${secondaryColor};
             font-weight: 600;
             color: ${secondaryColor};

             
             .uclickable {
                 pointer-events: none;
                 
             }

             .click {
               
                 pointer-events: none;
             }

         }

     

         .buyBtnModal {
             width: 180px;
             border-radius: 12px;
             background-color: ${primaryColor};
             border: none;
             font-size: 20px;
             color: white;
             font-weight: 600;
         }
     }
     }

     .modalClosed {
     transition: 0.400s;
     width: 100%;
     height: 90%;
     position: fixed;
     bottom: -100%;
     left: 0;
     background-color: white;
     border-top-right-radius: 16px;
     border-top-left-radius: 16px;
     z-index: 4;
     padding: 20px 40px;
     overflow: hidden;

     .cross {
       
         display: flex;
         flex-direction: row-reverse;
       
         width: 100%;
         .crossContainer {
             position: relative;
             width: 36px;
             height: 36px;
         }
     }

     .foodPicContainer {
        padding: 0px 80px;
         .foodPic {
             position: relative;
             width: 100%;
             height: 30vh;
         }
     }

     .foodNameModal {
         margin-top: 20px;
         color: ${secondaryColor};

     }

     .foodInfoModal {
         color: black;
         opacity: 0.65;
     }

     .drinking {
         margin-top: 20px;
         font-weight: 600;
         font-size: 20px;
     }

     .dChoices {
         margin-top: 16px;
         display: flex;
         flex-direction: column;
         gap: 16px;
         .coke {
         display: flex;
         flex-direction: row;
         gap: 12px;
         align-items: center;

         .cokeInput {
             width: 24px;
             height: 24px;
             accent-color: ${primaryColor};
         }
     }
     }
     .totalPrice {
         margin-top: 40px;
         font-size: 24px;
         font-weight: 600;
         color: ${secondaryColor};
             
         }

     .modalBtns {
         margin-top: 16px;
         display: flex;
         flex-direction: row;
         justify-content: space-between;

         

         .addBtn {
             display: flex;
             width: 160px;
             justify-content: space-between;
             font-size: 24px;
             padding: 12px;
             border-radius: 12px;
             border: 1px solid ${secondaryColor};
             font-weight: 600;
             color: ${secondaryColor};

             p {
                 color: red
             }
         }

     

         .buyBtnModal {
             width: 180px;
             border-radius: 12px;
             background-color: ${primaryColor};
             border: none;
             font-size: 20px;
             color: white;
             font-weight: 600;
         }
     }
     }
 }


   


     //laptop 

     @media only screen and (min-width: 769px) {
   
   .modalOpen {
   position: fixed;
   width: 620px;
   height: auto;
   margin-left: auto;
   margin-right: auto;
   left: 0;
   right: 0;
   bottom: 32px;
   background-color: white;
   border-radius: 16px;
   z-index: 6;
   padding: 20px 40px;
   transition: 0.400s;
   overflow-y: hidden !important;
   touch-action: none;
   
   .cross {
     
       display: flex;
       flex-direction: row-reverse;
     
       width: 100%;
       .crossContainer {
           position: relative;
           width: 36px;
           height: 36px;
       }
   }

   .foodPicContainer {
      padding: 0px 80px;
       .foodPic {
           position: relative;
           width: 100%;
           height: 36vh;
       }
   }

   .foodNameModal {
       margin-top: 20px;
       color: ${secondaryColor};

   }

   .foodInfoModal {
       margin-top: 4px;
   }

   .foodInfoModal {
       color: black;
       opacity: 0.65;
   }

   .drinking {
       margin-top: 20px;
       font-weight: 600;
       font-size: 20px;
       color: ${secondaryColor};
   }

   .dChoices {
       margin-top: 16px;
       display: flex;
       flex-direction: column;
       gap: 16px;
       .coke {
       display: flex;
       flex-direction: row;
       gap: 12px;
       align-items: center;
       color: ${secondaryColor};

       .cokeInput {
           width: 24px;
           height: 24px;
           accent-color: ${primaryColor};
       }
   }
   }
   .totalPrice {
       margin-top: 40px;
       font-size: 24px;
       font-weight: 600;
       color: ${secondaryColor};
           
       }

   .modalBtns {
       margin-top: 20px;
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       

       .addBtn {
           display: flex;
           width: 300px;
           justify-content: space-between;
           font-size: 24px;
           padding: 12px;
           border-radius: 12px;
           border: 1px solid ${secondaryColor};
           font-weight: 600;
           color: ${secondaryColor};

           
           .uclickable {
               pointer-events: none;
               
           }

           .click {
             
               pointer-events: none;
           }

       }

   

       .buyBtnModal {
           width: 180px;
           border-radius: 12px;
           background-color: ${primaryColor};
           border: none;
           font-size: 20px;
           color: white;
           font-weight: 600;
       }
   }
   }

   .modalClosed {
   transition: 0.400s;
   width: 620px;
   height: auto;
   position: fixed;
   bottom: -100%;
   margin-left: auto;
   margin-right: auto;
   left: 0;
   right: 0;
   background-color: white;
   border-radius: 16px;
   z-index: 4;
   padding: 20px 40px;
   overflow: hidden;

   .cross {
     
       display: flex;
       flex-direction: row-reverse;
     
       width: 100%;
       .crossContainer {
           position: relative;
           width: 36px;
           height: 36px;
       }
   }

   .foodPicContainer {
       .foodPic {
           position: relative;
           width: 100%;
           height: 30vh;
       }
   }

   .foodNameModal {
       margin-top: 20px;
       color: ${secondaryColor};

   }

   .foodInfoModal {
       color: black;
       opacity: 0.65;
   }

   .drinking {
       margin-top: 20px;
       font-weight: 600;
       font-size: 20px;
   }

   .dChoices {
       margin-top: 16px;
       display: flex;
       flex-direction: column;
       gap: 16px;
       .coke {
       display: flex;
       flex-direction: row;
       gap: 12px;
       align-items: center;

       .cokeInput {
           width: 24px;
           height: 24px;
           accent-color: ${primaryColor};
       }
   }
   }
   .totalPrice {
       margin-top: 32px;
       font-size: 24px;
       font-weight: 600;
           
       }

   .modalBtns {
       margin-top: 12px;
       display: flex;
       flex-direction: row;
       justify-content: space-between;

       

       .addBtn {
           display: flex;
           width: 160px;
           justify-content: space-between;
           font-size: 24px;
           padding: 12px;
           border-radius: 12px;
           border: 1px solid ${secondaryColor};
           font-weight: 600;

           p {
               color: red
           }
       }

   

       .buyBtnModal {
           width: 180px;
           border-radius: 12px;
           background-color: ${primaryColor};
           border: none;
           font-size: 20px;
           color: white;
           font-weight: 600;
       }
   }
   }
}


    //desktop 

    @media only screen and (min-width: 1400px) {
   
     .modalOpen {
     position: fixed;
     width: 620px;
     height: auto;
     margin-left: auto;
     margin-right: auto;
     left: 0;
     right: 0;
     bottom: 32px;
     background-color: white;
     border-radius: 16px;
     z-index: 6;
     padding: 20px 40px;
     transition: 0.400s;
     overflow-y: hidden !important;
     touch-action: none;
     
     .cross {
       
         display: flex;
         flex-direction: row-reverse;
       
         width: 100%;
         .crossContainer {
             position: relative;
             width: 36px;
             height: 36px;
         }
     }

     .foodPicContainer {
        padding: 0px 80px;
         .foodPic {
             position: relative;
             width: 100%;
             height: 36vh;
         }
     }

     .foodNameModal {
         margin-top: 20px;
         color: ${secondaryColor};

     }

     .foodInfoModal {
         margin-top: 4px;
     }

     .foodInfoModal {
         color: black;
         opacity: 0.65;
     }

     .drinking {
         margin-top: 20px;
         font-weight: 600;
         font-size: 20px;
         color: ${secondaryColor};
     }

     .dChoices {
         margin-top: 16px;
         display: flex;
         flex-direction: column;
         gap: 16px;
         .coke {
         display: flex;
         flex-direction: row;
         gap: 12px;
         align-items: center;
         color: ${secondaryColor};

         .cokeInput {
             width: 24px;
             height: 24px;
             accent-color: ${primaryColor};
         }
     }
     }
     .totalPrice {
         margin-top: 40px;
         font-size: 24px;
         font-weight: 600;
         color: ${secondaryColor};
             
         }

     .modalBtns {
         margin-top: 20px;
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         

         .addBtn {
             display: flex;
             width: 300px;
             justify-content: space-between;
             font-size: 24px;
             padding: 12px;
             border-radius: 12px;
             border: 1px solid ${secondaryColor};
             font-weight: 600;
             color: ${secondaryColor};

             
             .uclickable {
                 pointer-events: none;
                 
             }

             .click {
               
                 pointer-events: none;
             }

         }

     

         .buyBtnModal {
             width: 180px;
             border-radius: 12px;
             background-color: ${primaryColor};
             border: none;
             font-size: 20px;
             color: white;
             font-weight: 600;
         }
     }
     }

     .modalClosed {
     transition: 0.400s;
     width: 620px;
     height: auto;
     position: fixed;
     bottom: -100%;
     margin-left: auto;
     margin-right: auto;
     left: 0;
     right: 0;
     background-color: white;
     border-radius: 16px;
     z-index: 4;
     padding: 20px 40px;
     overflow: hidden;

     .cross {
       
         display: flex;
         flex-direction: row-reverse;
       
         width: 100%;
         .crossContainer {
             position: relative;
             width: 36px;
             height: 36px;
         }
     }

     .foodPicContainer {
         .foodPic {
             position: relative;
             width: 100%;
             height: 30vh;
         }
     }

     .foodNameModal {
         margin-top: 20px;
         color: ${secondaryColor};

     }

     .foodInfoModal {
         color: black;
         opacity: 0.65;
     }

     .drinking {
         margin-top: 20px;
         font-weight: 600;
         font-size: 20px;
     }

     .dChoices {
         margin-top: 16px;
         display: flex;
         flex-direction: column;
         gap: 16px;
         .coke {
         display: flex;
         flex-direction: row;
         gap: 12px;
         align-items: center;

         .cokeInput {
             width: 24px;
             height: 24px;
             accent-color: ${primaryColor};
         }
     }
     }
     .totalPrice {
         margin-top: 32px;
         font-size: 24px;
         font-weight: 600;
             
         }

     .modalBtns {
         margin-top: 12px;
         display: flex;
         flex-direction: row;
         justify-content: space-between;

         

         .addBtn {
             display: flex;
             width: 160px;
             justify-content: space-between;
             font-size: 24px;
             padding: 12px;
             border-radius: 12px;
             border: 1px solid ${secondaryColor};
             font-weight: 600;

             p {
                 color: red
             }
         }

     

         .buyBtnModal {
             width: 180px;
             border-radius: 12px;
             background-color: ${primaryColor};
             border: none;
             font-size: 20px;
             color: white;
             font-weight: 600;
         }
     }
     }
 }


    

`