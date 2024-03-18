import React from 'react'
import './weather.css'
function Weather() {
  return (
    <>
      <div className="container-fluid calBox">
    <div className="row mt-5 text-center">
    <div className="col-12">
    <h1>WeatherApp Project Details</h1>
    </div>
    </div>
    <div className='container mt-5 calInnerBox'>
    <div className='row text-center'>
        <div className='col-12'>
            <h4>Summary</h4>
            <p className='mt-1'>A Weather App having all the basics functionality and used weather API to retrieve real time weather</p>

            <h4 className='mt-5'>Technology Used</h4>
            <p className='mt-1'>ReactJs,CSS3</p>

            <h4 className='mt-5'>GitHub Link</h4>
            <p className='mt-1'>https://github.com/MeghaDhangar/WeatherApplication</p>

            <h4 className='mt-5'>Netlify Hosting</h4>
            <p className='mt-1'>https://weatherrapplicationn.netlify.app</p>
        </div>
    </div>
    </div>

</div>
    </>
  )
}

export default Weather
