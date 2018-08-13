export default class Starship {
  constructor(requestData) {
    this.name = requestData.name;
    this.model = requestData.model;
    this.manufacturer = requestData.manufacturer;
    this.costInCredits = requestData.cost_in_credits;
    this.length = requestData.length;
    this.maxSpeed = requestData.max_atmosphering_speed;
    this.crew = requestData.crew;
    this.passengers = requestData.passengers;
    this.cargoCapacity = requestData.cargo_capacity;
    this.consumables = requestData.consumables;
    this.hyperdriveRating = requestData.hyperdrive_rating;
    this.starshipClass = requestData.starship_class;
    this.pilots = requestData.pilots;
    this.films = requestData.films;
    this.url = requestData.url;
  }
}