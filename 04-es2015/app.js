let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);
const citiesId = ['paris', 'nyc', 'rome', 'rio-de-janeiro'];
console.log(citiesId);
//citiesId=[];
//console.log(citiesId);
citiesId.push('tokyo');
console.log(citiesId);

function getWeather(cityId) {
    let city = cityId.toLowerCase();
    let temperature = 20;

    return { city, temperature };
}

const weather = getWeather(favoriteCityId);
console.log(weather);


const {
    city: city,
    temperature: temperature,
} = weather;

console.log(city);
console.log(temperature);

let [parisId, nycId, ...othersCitiesId] = citiesId;

console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    static getDefaultTrip() {
        let defaultTrip = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');

        return defaultTrip;
    }
    toString() {
        return 'Trip [' + this.id + ' , ' + this.name + ' , ' + this.imageUrl + ' , ' + this._price + ']';
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        this._price = newPrice;
    }
}

parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
parisTrip._price = 100;

console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());

let defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());


class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this._price = 0;
    }
    toString(){
        return 'Free' + super.toString();
    }
}

const freeTrip = new FreeTrip('nantes', 'nantes', 'img/nanges.jpg');
console.log(freeTrip.toString());