//---------------------sách-------------------------
import {BookInfo} from "./bookInfo";
export class Book  extends BookInfo{
    private _Author :string;
    private _Page:number;


    constructor(ID: number, imprint: string, releaseNumber: number, bookCode: number, Author: string, Page: number) {
        super(ID, imprint, releaseNumber, bookCode);
        this._Author = Author;
        this._Page = Page;
    }

    get Author(): string {
        return this._Author;
    }

    set Author(value: string) {
        this._Author = value;
    }

    get Page(): number {
        return this._Page;
    }

    set Page(value: number) {
        this._Page = value;
    }
}