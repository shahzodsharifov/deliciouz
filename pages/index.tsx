import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import styles from '../styles/Home.module.css'
import { MainWrapper } from '../styles/MainWrapper'
import RedGuy from "../public/img/red.png"
import FoodCard from '../components/FoodCard'
import DetailModal from '../components/DetailModal'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { LandingEn, LandingRu, LandingUzb } from '../public/generalInfo'
import Footer from '../components/Footer'





const Home: NextPage = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState("Hamburger")

  const router = useRouter();


  function getInfo() {
    if(router.locale == "uz") {
      return LandingUzb;
    } else if (router.locale == "ru") {
      return LandingRu;
    } else if (router.locale == "en") {
      return LandingEn;
    }
  }
  return (
   <div style={{"overflowY": "hidden"}}>
    <Navigation/>
    <MainWrapper>
      <div className={isModalOpen ? "modalBg" : "modalBgClosed"}></div>
      <div className='landingInfo'>
        
        <div className='landingTexts'>
          <p className='landingTag'>{getInfo()?.landingTag}</p>
          <h1 className='landingHeadline'>{getInfo()?.landingHeading}</h1>
          <p className='landingSubText'>{getInfo()?.landingSubText}</p>

          <div className='landingBtns'>
            <button className='primaryBtn' onClick={() => router.push("/contacts")}>
            {getInfo()?.contacts}
            </button>

            <button className='secondaryBtn'>
              {getInfo()?.foods}
            </button>
          </div>
        </div>

        <div className='landingPicContainer'>
          <div className='landingPic'>
            <Image src={RedGuy} alt="guy in red" fill/>
          </div>
        </div>
      </div>

      <h2 className='ffHeadline'>
        	
      &#127828; {getInfo()?.ff}
      </h2>
      <div className='topFFList'>
        <div onClick={()=> {
          console.log("click")
          setSelectedFood("Hamburger")
          setModalOpen(true)}}>
        <FoodCard foodName="Hamburger"/>
        </div>

        <div onClick={()=> {
          setSelectedFood("Mix")
          setModalOpen(true)}}>
        <FoodCard foodName="Mix"/>
        </div>

        <div onClick={()=> {
          setSelectedFood("Mix")
          setModalOpen(true)}}>
        <FoodCard foodName="Mix"/>
        </div>

        <div onClick={()=> {
          setSelectedFood("Hamburger")
          setModalOpen(true)}}>
        <FoodCard foodName="Hamburger"/>
        </div>

        <div onClick={()=> {
          setSelectedFood("Mix")
          setModalOpen(true)}}>
        <FoodCard foodName="Mix"/>
        </div>
       

        <div onClick={()=> {
          setSelectedFood("Hamburger")
          setModalOpen(true)}}>
        <FoodCard foodName="Hamburger"/>
        </div>
      </div>

      <DetailModal isOpen={isModalOpen}setModalOpen={setModalOpen} selectedFood={selectedFood}/>
    
    </MainWrapper>
    <Footer/>
   </div>
  )
}

export default Home
