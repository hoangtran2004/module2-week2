import {InfoCadres} from "./infoCadres";
import {Genders} from "./infoCadres";

enum Level {
    One = 1,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten
}


export class Staff extends InfoCadres {
    private _Level: Level;

    constructor(Name: string, Age: number, Address: string, Gender: Genders, Level: Level) {
        super(Name, Age, Address, Gender);
        this._Level = Level;
    }

    getLevel(): Level {
        return this._Level;
    }

    setLevel(value: Level) {
        this._Level = value;
    }
}