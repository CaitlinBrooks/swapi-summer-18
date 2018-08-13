export default class Planet {
  constructor(requestData) {
    this.name = requestData.name;
    this.rotationPeriod = requestData.rotation_period;
    this.orbitalPeriod = requestData.orbital_period;
    this.diameter = requestData.diameter;
    this.climate = requestData.climate;
    this.gravity = requestData.gravity;
    this.terrain = requestData.terrain;
    this.surfaceWater = requestData.surface_water;
    this.population = requestData.population;
    this.residents = requestData.residents
  }
}