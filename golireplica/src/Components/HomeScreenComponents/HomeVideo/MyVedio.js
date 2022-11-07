import React from 'react'
import { Player } from 'video-react';
import "../../../../../node_modules/video-react/dist/video-react.css";
const MyVedio = () => {
  return (
    <div className='col-7 m-0 p-0'>
       <Player
      playsInline
      poster="../../../assets/Images/BannerBacgroundColor.jpeg"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
    </div>
  )
}

export default MyVedio