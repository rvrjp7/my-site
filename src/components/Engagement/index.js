import React from 'react'
import { MainContainer } from './styles'
const engagementEngImg = require('../../assets/engagement_english.jpg')

const Engagement = () => {
  return (
    <MainContainer className='engagement-english'>
        <img src={engagementEngImg} alt=""></img>
    </MainContainer>
  )
}

export default Engagement