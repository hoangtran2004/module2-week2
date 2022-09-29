import {Manager} from "./manage";
import {Person} from "../model/Person";
import {ManageCity} from "./manageCity";
import {City} from "../model/city";

export class ManagePeople implements Manager<Person> {

    ListPerson: Person[] = [];

    Add(t: Person): void {
        this.ListPerson.push(t)
    }

    findByID(id: number): Person {
        return new Person(0,'0',0,new City('0',0,0,0))
    }

    findByIndex(index: number): Person {
        return new Person(0,'0',0,new City('0',0,0,0))
    }

    showAll(): void {
        for (let i = 0; i < this.ListPerson.length; i++) {
            console.log(`${this.ListPerson[i].Name} in ${List}`)
        }
    }


}