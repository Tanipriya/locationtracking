import React, { useState } from 'react'

const Location = () => {
    const [latitude, setLatitude] = useState()
    const [longitute, setLongitude] = useState()

    const location= navigator.geolocation
    // console.log("location", location)

    location.getCurrentPosition(userCoords)
    function userCoords(positon) {
        let userlatitude= positon.coords.latitude
        setLatitude(userlatitude)
        let userlongitude= positon.coords.longitude
        setLongitude(userlongitude)

    }

  return (
    <>
    <div >
        <h1>Find Current Location</h1>
        <h1>Latitude: {latitude}</h1>
        <h1>Longitude: {longitute}</h1>
        <p>this is the {latitude} and {longitute} </p>

    </div>
    </>
  )
}

export default Location