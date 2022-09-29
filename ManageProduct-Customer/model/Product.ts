export class Product {
    private _Name: string;
    private _IDProduct: number;
    private _Amount: number;

    constructor(Name: string, IDProduct: number, Amount: number) {
        this._Name = Name;
        this._IDProduct = IDProduct;
        this._Amount = Amount;
    }

    get Name(): string {
        return this._Name;
    }

    set Name(value: string) {
        this._Name = value;
    }

    get IDProduct(): number {
        return this._IDProduct;
    }

    set IDProduct(value: number) {
        this._IDProduct = value;
    }

    get Amount(): number {
        return this._Amount;
    }

    set Amount(value: number) {
        this._Amount = value;
    }
}