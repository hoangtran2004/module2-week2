enum Gender{
    MALE,
    FEMALE,
    OTHER
}
 export class Staff{
    name:string;
    gender:Gender;
    date:Date;
    phoneNumber:string;
    email:string;

    constructor(name: string, gender: Gender, date: Date, phoneNumber: string, email: string) {
        this.name = name;
        this.gender = gender;
        this.date = date;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

}
