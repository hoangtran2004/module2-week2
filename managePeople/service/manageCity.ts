import {City} from "./city";
import {Manager} from "../service/manage";

export class ManageCity implements Manager<City> {

    constructor() {
        this.ListCity.push(new City('HN', 111, 2, 10000))
        this.ListCity.push(new City('HP', 222, 3, 10000))
        this.ListCity.push(new City('HG', 333, 2, 100000))
        this.ListCity.push(new City('QN', 444, 1, 1000000))
        this.ListCity.push(new City('LC', 555, 3, 1000000))
    }

    findByID(id: number): City {
        for (let i = 0; i < this.ListCity.length; i++) {
            if (this.ListCity[i].ID == id) {
                return this.ListCity[i]
            } else return new City('0', 0, 0, 0)
        }
    }

    findByIndex(index: number): City {
        return undefined;
    }

    showAll(): City {
        for (let i = 0; i < this.ListCity.length; i++) {
            console.log(``)
        }
    }

    ListCity: City[] = [];


    Add(t: City): void {
        this.ListCity.push(t)

    }
}