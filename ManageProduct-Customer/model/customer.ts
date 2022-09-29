
export class Customer {
    private _Name:string;
    private _ID:number
    private _Address:string;
    private _AmountProduct:number=0;


    constructor(Name: string, ID: number, Address: string, AmountProduct: number) {
        this._Name = Name;
        this._ID = ID;
        this._Address = Address;
        this._AmountProduct = AmountProduct;
    }

    get Name(): string {
        return this._Name;
    }

    set Name(value: string) {
        this._Name = value;
    }

    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }

    get Address(): string {
        return this._Address;
    }

    set Address(value: string) {
        this._Address = value;
    }

    get AmountProduct(): number {
        return this._AmountProduct;
    }

    set AmountProduct(value: number) {
        this._AmountProduct = value;
    }
}