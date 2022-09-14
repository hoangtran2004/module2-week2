//------------báo-------------
import {BookInfo} from "./bookInfo";
export class Newspaper extends BookInfo{
    private _releaseDate :number;// ngày phát hành


    constructor(ID: number, imprint: string, releaseNumber: number, bookCode: number, releaseDate: number) {
        super(ID, imprint, releaseNumber, bookCode);
        this._releaseDate = releaseDate;
    }

    get releaseDate(): number {
        return this._releaseDate;
    }

    set releaseDate(value: number) {
        this._releaseDate = value;
    }
}
