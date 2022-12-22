import styled from "styled-components";

export const primaryColor = "#F54749";
export const secondaryColor = "#262424";
export const accentColor = "#F9F6F6";

export const NavWrapper = styled.div`

    @media only screen and (max-width:600px) {
        top: 0;
        position: fixed;
        width: 100%;
        height: 72px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        align-items: center;
        padding: 20px;
        z-index: 1;
        box-shadow:0px 10px 30px 0px rgba(50, 50, 50, 0.15);

        .logo {
            h1 {
                color: ${secondaryColor};
                font-weight: 800;
                font-size: 20px;

                span {
                    color: ${primaryColor}
                }
            }
        }

        .shoppingCartContainer {
            .cartTag {
                position: absolute;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-content: center;
                background-color: ${primaryColor};
                width: 24px;
                padding: 2px;
                border-radius: 50%;
                z-index: 4;
                right: 12px;
                top: 10px;
                

                p {
                    font-size: 14px;
                    color: white;
                }
            }
            .cartTagClosed {
                position: absolute;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-content: center;
                background-color: ${primaryColor};
                width: 24px;
                padding: 2px;
                border-radius: 50%;
                z-index: 4;
                right: 12px;
                top: 10px;
                transition: 0.400s;
                opacity: 0;
                visibility: hidden;

                p {
                    font-size: 14px;
                }
            }
            
            .shoppingCart {
                position: relative;
                width: 32px;
                height: 32px;
            }
        }


        .hamburgerContainer {
            .hamIc {
                position: relative;
                width: 32px;
                height: 32px;
            }

            :active {
                border-radius: 12px;
                background-color: ${accentColor};
            }
        }

       .navBg {
        transition: 0.400s;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(34, 51, 68, 0.333);
        z-index: 2;
    
       }

       .moreInfoNav {
            transition: 0.600s ease;
            display: flex;
            flex-direction: column;
            left: 0;
            top: 0;
            position: fixed;
            background-color: white;
            width: 70%;
            height: 100vh;
            z-index: 3;
        

            .menuLabel {
                width: 100%;
                height: 72px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                background-color: ${accentColor};
                padding: 0px 20px;
                p {
                    color: ${secondaryColor};
                    font-size: 20px;
                    font-weight: 600;
                }
                .arrow {
                    .arrowContainer {
                    position: relative;
                    width: 24px;
                    height: 24px;
                    opacity: 0.55;

           
                }

              
                }

            
            }

            .nav-items {
                display: flex;
                flex-direction: column;
                width: 100%;
                margin-top: 20px;
                padding: 0px 20px;


                .languageSelect {
                    width: 100%;
                    height: 48px;
                    padding: 12px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    border: 1px solid #CECECE;
                    border-radius: 12px;
                    
                    .theFlag {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 12px;
                        .flagImgContainer {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 32px;
                        height: 32px;
                       
                        .flagImg{
                            position: relative;
                            width: 100%;
                            height: 104%;

                        }
                    }

                    p {
                        color: ${secondaryColor};
                        font-weight: 500;
                    }

                    .flagsListOpen {
                        margin-top: 152px;
                        margin-left: 30px;
                        width: 220px;
                        height: auto;
                        left: 0;
                        top: 0;
                        position: absolute;
                        background-color: white;
                        border-radius: 12px;
                        box-shadow:         0px 10px 30px 0px rgba(50, 50, 50, 0.15);
                        padding: 20px;
                        transition: 0.400s;
                        z-index: 1;
                        ul {
                           list-style: none;
                           display: flex;
                           flex-direction: column;
                           gap: 12px;
                            
                        }

                        li {
                           
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                         
                            .fl {
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                gap: 12px;
                            }

                            .tickContainer {
                                display: none;
                                 .tick {
                                 position: relative;
                                 width: 24px;
                                 height: 24px;
                                 opacity: 0.55;
                             }
                             }


                            
                        }

                        .activeFl {
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                         
                            .fl {
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                gap: 12px;
                            }

                            .tickContainer {
                                display: flex;
                                 .tick {
                                 position: relative;
                                 width: 24px;
                                 height: 24px;
                                 opacity: 0.55;
                             }
                             }
                        }
                    }

                    .flagsListClosed {
                        transition: 0.400s;
                        margin-top: 100px;
                        margin-left: 30px;
                        width: 220px;
                        height: auto;
                        left: 0;
                        top: 0;
                        position: absolute;
                        background-color: white;
                        border-radius: 12px;
                        box-shadow:         0px 10px 30px 0px rgba(50, 50, 50, 0.15);
                        padding: 20px;
                        opacity: 0;
                        pointer-events: none;
                        
                     
                      
                        ul {
                           
                           list-style: none;
                           display: flex;
                           flex-direction: column;
                           gap: 12px;
                            
                        }

                        li {
                           
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                         
                            .fl {
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                gap: 12px;
                            }

                            .tickContainer {
                                 .tick {
                                 position: relative;
                                 width: 24px;
                                 height: 24px;
                                 opacity: 0.55;
                             }
                             }


                            
                        }
                    }
                    }

                    .dropIcContainer {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 20px;
                        height: 20px;
                        rotate: -90deg;
                        transition: 0.300s;
                       
                        .dropIc{
                            position: relative;
                            width: 100%;
                            height: 104%;

                        }

                  
                    }

                    .dropIcContainerOpen {
                        transition: 0.300s;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 20px;
                        height: 20px;
                        rotate: 90deg;
                       
                        .dropIc{
                            position: relative;
                            width: 100%;
                            height: 104%;

                        }
                    }
                }

                .pages {
                    margin-top: 40px;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    list-style: none;

                    li {
                        padding:10px;
                        font-size: 16px;
                        border-radius: 8px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        
                        p {
                            font-weight: 550;
                            color: ${secondaryColor}
                        }
                        .tickContainer {
                                display: none;
                                 .tick {
                                 position: relative;
                                 width: 24px;
                                 height: 24px;
                                 opacity: 0.55;
                             }
                             }
                       
                    }

                    .activeRoute {
                            background-color: ${accentColor};

                            .tickContainer {
                                display: flex;
                                 .tick {
                                 position: relative;
                                 width: 24px;
                                 height: 24px;
                                 opacity: 0.55;
                             }
                             }
                        }


                }
            }

        }

       .navBgClosed {
       
        transition: 0.400s;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(34, 51, 68, 0.333);
        opacity: 0;
        visibility: hidden;
        
        
     
       }

       .moreInfoNavClosed {
            transition: 0.400s;
            display: flex;
            flex-direction: column;
            left: -100%;
            top: 0;
            position: fixed;
            background-color: white;
            width: 70%;
            height: 100vh;
        

            .menuLabel {
                width: 100%;
                height: 72px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                background-color: ${accentColor};
                padding: 0px 20px;
                p {
                    color: ${secondaryColor};
                    font-size: 20px;
                    font-weight: 600;
                }
                .arrow {
                    .arrowContainer {
                    position: relative;
                    width: 24px;
                    height: 24px;
                    opacity: 0.55;
                }
                }
            }

            .nav-items {
                display: flex;
                flex-direction: column;
                width: 100%;
                margin-top: 20px;
                padding: 0px 20px;


                .languageSelect {
                    width: 100%;
                    height: 48px;
                    padding: 12px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    border: 1px solid #CECECE;
                    border-radius: 12px;
                    
                    .theFlag {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 12px;
                        .flagImgContainer {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 32px;
                        height: 32px;
                       
                        .flagImg{
                            position: relative;
                            width: 100%;
                            height: 104%;

                        }
                    }

                    p {
                        color: ${secondaryColor};
                        font-weight: 500;
                    }

                    .flagsListOpen {
                        margin-top: 152px;
                        margin-left: 30px;
                        width: 220px;
                        height: auto;
                        left: 0;
                        top: 0;
                        position: absolute;
                        background-color: white;
                        border-radius: 12px;
                        box-shadow:         0px 10px 30px 0px rgba(50, 50, 50, 0.15);
                        padding: 20px;
                        transition: 0.400s;
                        z-index: 1;
                        ul {
                           list-style: none;
                           display: flex;
                           flex-direction: column;
                           gap: 12px;
                            
                        }

                        li {
                           
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                         
                            .fl {
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                gap: 12px;
                            }

                            .tickContainer {
                                 .tick {
                                 position: relative;
                                 width: 24px;
                                 height: 24px;
                                 opacity: 0.55;
                             }
                             }


                            
                        }
                    }

                    .flagsListClosed {
                        transition: 0.400s;
                        margin-top: 100px;
                        margin-left: 30px;
                        width: 220px;
                        height: auto;
                        left: 0;
                        top: 0;
                        position: absolute;
                        background-color: white;
                        border-radius: 12px;
                        box-shadow:         0px 10px 30px 0px rgba(50, 50, 50, 0.15);
                        padding: 20px;
                        opacity: 0;
                        ul {
                           
                           list-style: none;
                           display: flex;
                           flex-direction: column;
                           gap: 12px;
                            
                        }

                        li {
                           
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                         
                            .fl {
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                gap: 12px;
                            }

                            .tickContainer {
                                 .tick {
                                 position: relative;
                                 width: 24px;
                                 height: 24px;
                                 opacity: 0.55;
                             }
                             }


                            
                        }
                    }
                    }

                    .dropIcContainer {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 20px;
                        height: 20px;
                        rotate: -90deg;
                        transition: 0.300s;
                       
                        .dropIc{
                            position: relative;
                            width: 100%;
                            height: 104%;

                        }

                  
                    }

                    .dropIcContainerOpen {
                        transition: 0.300s;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 20px;
                        height: 20px;
                        rotate: 90deg;
                       
                        .dropIc{
                            position: relative;
                            width: 100%;
                            height: 104%;

                        }
                    }
                }

                .pages {
                    margin-top: 40px;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    list-style: none;

                    li {
                        padding:10px;
                        font-size: 16px;
                        border-radius: 8px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        
                        p {
                            font-weight: 550;
                        }
                        .tickContainer {
                                display: none;
                                 .tick {
                                 position: relative;
                                 width: 24px;
                                 height: 24px;
                                 opacity: 0.55;
                             }
                             }
                       
                    }

                    .activeRoute {
                            background-color: ${accentColor};

                            .tickContainer {
                                display: flex;
                                 .tick {
                                 position: relative;
                                 width: 24px;
                                 height: 24px;
                                 opacity: 0.55;
                             }
                             }
                        }


                }
            }

        }


       
        
    }


     //desktop


     @media only screen and (min-width:600px) {
        top: 0;
        position: fixed;
        width: 100%;
        height: 72px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        align-items: center;
        padding: 20px 100px;
        z-index: 1;
        box-shadow:0px 10px 30px 0px rgba(50, 50, 50, 0.15);
      

        .logo {
            h1 {
                color: ${secondaryColor};
                font-weight: 800;
                font-size: 20px;

                span {
                    color: ${primaryColor}
                }
            }
        }

        
        .shoppingCartContainer {
            .cartTag {
                position: absolute;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-content: center;
                background-color: ${primaryColor};
                width: 24px;
                padding: 2px;
                border-radius: 50%;
                z-index: 4;
                right: 90px;
                top: 10px;

                p {
                    font-size: 14px;
                }
            }
            .cartTagClosed {
                position: absolute;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-content: center;
                background-color: ${primaryColor};
                width: 24px;
                padding: 2px;
                border-radius: 50%;
                z-index: 4;
                right: 12px;
                top: 10px;
                transition: 0.400s;
                opacity: 0;
                visibility: hidden;

                p {
                    font-size: 14px;
                }
            }
            .shoppingCart {
                position: relative;
                width: 32px;
                height: 32px;
            }
        }


        .hamburgerContainer {
            .hamIc {
                position: relative;
                width: 32px;
                height: 32px;
            }

            :active {
                border-radius: 12px;
                background-color: ${accentColor};
            }
        }

       .navBg {
        transition: 0.400s;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(34, 51, 68, 0.333);
        z-index: 2;
    
       }

       .moreInfoNav {
            transition: 0.600s ease;
            display: flex;
            flex-direction: column;
            left: 0;
            top: 0;
            position: fixed;
            background-color: white;
            width: 30%;
            height: 100vh;
            z-index: 3;
        

            .menuLabel {
                width: 100%;
                height: 72px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                background-color: ${accentColor};
                padding: 0px 20px;
                p {
                    color: ${secondaryColor};
                    font-size: 20px;
                    font-weight: 600;
                }
                .arrow {
                    .arrowContainer {
                    position: relative;
                    width: 24px;
                    height: 24px;
                    opacity: 0.55;

           
                }

              
                }

            
            }

            .nav-items {
                display: flex;
                flex-direction: column;
                width: 100%;
                margin-top: 20px;
                padding: 0px 20px;


                .languageSelect {
                    width: 100%;
                    height: 48px;
                    padding: 12px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    border: 1px solid #CECECE;
                    border-radius: 12px;
                    
                    .theFlag {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 12px;
                        .flagImgContainer {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 32px;
                        height: 32px;
                       
                        .flagImg{
                            position: relative;
                            width: 100%;
                            height: 104%;

                        }
                    }

                    p {
                        color: ${secondaryColor};
                        font-weight: 500;
                    }

                    .flagsListOpen {
                        margin-top: 152px;
                        margin-left: 30px;
                        width: 220px;
                        height: auto;
                        left: 0;
                        top: 0;
                        position: absolute;
                        background-color: white;
                        border-radius: 12px;
                        box-shadow:         0px 10px 30px 0px rgba(50, 50, 50, 0.15);
                        padding: 20px;
                        transition: 0.400s;
                        z-index: 1;
                        ul {
                           list-style: none;
                           display: flex;
                           flex-direction: column;
                           gap: 12px;
                            
                        }

                        li {
                           
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                         
                            .fl {
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                gap: 12px;
                            }

                            .tickContainer {
                                display: none;
                                 .tick {
                                 position: relative;
                                 width: 24px;
                                 height: 24px;
                                 opacity: 0.55;
                             }
                             }


                            
                        }

                        .activeFl {
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                         
                            .fl {
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                gap: 12px;
                            }

                            .tickContainer {
                                display: flex;
                                 .tick {
                                 position: relative;
                                 width: 24px;
                                 height: 24px;
                                 opacity: 0.55;
                             }
                             }
                        }
                    }

                    .flagsListClosed {
                        transition: 0.400s;
                        margin-top: 100px;
                        margin-left: 30px;
                        width: 220px;
                        height: auto;
                        left: 0;
                        top: 0;
                        position: absolute;
                        background-color: white;
                        border-radius: 12px;
                        box-shadow:         0px 10px 30px 0px rgba(50, 50, 50, 0.15);
                        padding: 20px;
                        opacity: 0;
                        pointer-events: none;
                        
                     
                      
                        ul {
                           
                           list-style: none;
                           display: flex;
                           flex-direction: column;
                           gap: 12px;
                            
                        }

                        li {
                           
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                         
                            .fl {
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                gap: 12px;
                            }

                            .tickContainer {
                                 .tick {
                                 position: relative;
                                 width: 24px;
                                 height: 24px;
                                 opacity: 0.55;
                             }
                             }


                            
                        }
                    }
                    }

                    .dropIcContainer {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 20px;
                        height: 20px;
                        rotate: -90deg;
                        transition: 0.300s;
                       
                        .dropIc{
                            position: relative;
                            width: 100%;
                            height: 104%;

                        }

                  
                    }

                    .dropIcContainerOpen {
                        transition: 0.300s;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 20px;
                        height: 20px;
                        rotate: 90deg;
                       
                        .dropIc{
                            position: relative;
                            width: 100%;
                            height: 104%;

                        }
                    }
                }

                .pages {
                    margin-top: 40px;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    list-style: none;

                    li {
                        padding:10px;
                        font-size: 16px;
                        border-radius: 8px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        
                        p {
                            color: ${secondaryColor};
                            font-weight: 550;
                           
                        }
                        .tickContainer {
                                display: none;
                                 .tick {
                                 position: relative;
                                 width: 24px;
                                 height: 24px;
                                 opacity: 0.55;
                             }
                             }
                       
                    }

                    .activeRoute {
                            background-color: ${accentColor};

                            .tickContainer {
                                display: flex;
                                 .tick {
                                 position: relative;
                                 width: 24px;
                                 height: 24px;
                                 opacity: 0.55;
                             }
                             }
                        }


                }
            }

        }

       .navBgClosed {
       
        transition: 0.400s;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(34, 51, 68, 0.333);
        opacity: 0;
        visibility: hidden;
        
        
     
       }

       .moreInfoNavClosed {
            transition: 0.400s;
            display: flex;
            flex-direction: column;
            left: -100%;
            top: 0;
            position: fixed;
            background-color: white;
            width: 70%;
            height: 100vh;
        

            .menuLabel {
                width: 100%;
                height: 72px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                background-color: ${accentColor};
                padding: 0px 20px;
                p {
                    color: ${secondaryColor};
                    font-size: 20px;
                    font-weight: 600;
                }
                .arrow {
                    .arrowContainer {
                    position: relative;
                    width: 24px;
                    height: 24px;
                    opacity: 0.55;
                }
                }
            }

            .nav-items {
                display: flex;
                flex-direction: column;
                width: 100%;
                margin-top: 20px;
                padding: 0px 20px;


                .languageSelect {
                    width: 100%;
                    height: 48px;
                    padding: 12px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    border: 1px solid #CECECE;
                    border-radius: 12px;
                    
                    .theFlag {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 12px;
                        .flagImgContainer {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 32px;
                        height: 32px;
                       
                        .flagImg{
                            position: relative;
                            width: 100%;
                            height: 104%;

                        }
                    }

                    p {
                        color: ${secondaryColor};
                        font-weight: 500;
                    }

                    .flagsListOpen {
                        margin-top: 152px;
                        margin-left: 30px;
                        width: 220px;
                        height: auto;
                        left: 0;
                        top: 0;
                        position: absolute;
                        background-color: white;
                        border-radius: 12px;
                        box-shadow:         0px 10px 30px 0px rgba(50, 50, 50, 0.15);
                        padding: 20px;
                        transition: 0.400s;
                        z-index: 1;
                        ul {
                           list-style: none;
                           display: flex;
                           flex-direction: column;
                           gap: 12px;
                            
                        }

                        li {
                           
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                         
                            .fl {
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                gap: 12px;
                            }

                            .tickContainer {
                                 .tick {
                                 position: relative;
                                 width: 24px;
                                 height: 24px;
                                 opacity: 0.55;
                             }
                             }


                            
                        }
                    }

                    .flagsListClosed {
                        transition: 0.400s;
                        margin-top: 100px;
                        margin-left: 30px;
                        width: 220px;
                        height: auto;
                        left: 0;
                        top: 0;
                        position: absolute;
                        background-color: white;
                        border-radius: 12px;
                        box-shadow:         0px 10px 30px 0px rgba(50, 50, 50, 0.15);
                        padding: 20px;
                        opacity: 0;
                        ul {
                           
                           list-style: none;
                           display: flex;
                           flex-direction: column;
                           gap: 12px;
                            
                        }

                        li {
                           
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                         
                            .fl {
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                gap: 12px;
                            }

                            .tickContainer {
                                 .tick {
                                 position: relative;
                                 width: 24px;
                                 height: 24px;
                                 opacity: 0.55;
                             }
                             }


                            
                        }
                    }
                    }

                    .dropIcContainer {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 20px;
                        height: 20px;
                        rotate: -90deg;
                        transition: 0.300s;
                       
                        .dropIc{
                            position: relative;
                            width: 100%;
                            height: 104%;

                        }

                  
                    }

                    .dropIcContainerOpen {
                        transition: 0.300s;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 20px;
                        height: 20px;
                        rotate: 90deg;
                       
                        .dropIc{
                            position: relative;
                            width: 100%;
                            height: 104%;

                        }
                    }
                }

                .pages {
                    margin-top: 40px;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    list-style: none;

                    li {
                        padding:10px;
                        font-size: 16px;
                        border-radius: 8px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        
                        p {
                            font-weight: 550;
                        }
                        .tickContainer {
                                display: none;
                                 .tick {
                                 position: relative;
                                 width: 24px;
                                 height: 24px;
                                 opacity: 0.55;
                             }
                             }
                       
                    }

                    .activeRoute {
                            background-color: ${accentColor};

                            .tickContainer {
                                display: flex;
                                 .tick {
                                 position: relative;
                                 width: 24px;
                                 height: 24px;
                                 opacity: 0.55;
                             }
                             }
                        }


                }
            }

        }


       
        
    }
`