import React from 'react'
import { MainContainer } from './styles'
import Lottie from 'react-lottie';
import animationData from './animation.json';
const engagementEngImg = require('../../assets/engagement_english.jpg')
const Engagement = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <MainContainer className='engagement-english'>
        <img src={engagementEngImg} alt=""></img>
        <Lottie 
	    options={defaultOptions}
        style={{position:"absolute"}}
      />
    </MainContainer>
  )
}

export default Engagement