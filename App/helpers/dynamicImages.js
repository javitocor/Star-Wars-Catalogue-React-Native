function dynamicImages (name) {
  if (name==='Films') {
    return require('../assets/images/Films.jpg')
  } if (name==='Characters'){
    return require('../assets/images/people.jpg')
  } if (name==='Spaceships'){
    return require('../assets/images/Spaceships.jpg')
  } if (name==='Planets'){
    return require('../assets/images/Planets.jpg')
  } if (name==='Species'){
    return require('../assets/images/Species.jpg')
  } if (name==='Vehicles'){
    return require('../assets/images/Vehicles.jpg')
  } 
    return ''
}

export default dynamicImages;