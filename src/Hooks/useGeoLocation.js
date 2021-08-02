import { useState, useEffect } from 'react'

export default function useGeoLocation () {
  const [location, setLocation] = useState({
    loaded: false,
    coord: { lat: '', lon: '' }
  })

  const onSuccess = (location) => {
    const data = {
      loaded: true,
      coord: {
        lat: location.coords.latitude,
        lon: location.coords.longitude
      }
    }
    setLocation(data)
  }

  const onError = (error) => {
    const data = {
      loaded: true,
      error: {
        code: error.code,
        message: error.message
      }
    }
    setLocation(data)
  }

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocalizacion no soportada'
      })
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }, [])

  return location
}
