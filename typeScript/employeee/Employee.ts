export class Employee {
     _firstName: string;
     _lastName: string;
     _date: Date;
     _address: string;
     _job: string;

    constructor(firstName: string, lastName: string, date: Date, address: string, job: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._date = date;
        this._address = address;
        this._job = job;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get job(): string {
        return this._job;
    }

    set job(value: string) {
        this._job = value;
    }
}