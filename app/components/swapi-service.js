import Person from "../models/Person.js";
import Starship from "../models/Starship.js"


export default class SwapiService {


  getPlanets(draw, drawError) {
    console.log("HELLO FROM SWAPISERVICE")
    fetch('https://swapi.co/api/planets')
      .then(res => res.json())
      .then(res => {
        let myPlanets = res.results.map(rawPlanet => {
          return new Person(rawPlanet)
        })
        draw(myPlanets)
      })
      .catch(drawError)

    console.log("HERE I AM")
  }

  getPeople(draw, drawError) {
    console.log("HELLO FROM SWAPISERVICE")
    fetch('https://swapi.co/api/people')
      .then(res => res.json())
      .then(res => {
        let myPeople = res.results.map(rawPerson => {
          return new Person(rawPerson)
        })
        draw(myPeople)
      })
      .catch(drawError)

    console.log("HERE I AM")
  }


  getStarships(draw, drawError) {
    console.log("HELLO FROM SWAPISERVICE")
    fetch('https://swapi.co/api/starships')
      .then(res => res.json())
      .then(draw)
      .catch(drawError)

    console.log("HERE I AM")
  }

}