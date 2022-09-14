//thông tin chung

import {Book} from "./Book";
import {Magazine} from "./Magazine";
import {ManageBook} from "../modal/ManageBook";
import {Newspaper} from "./Newspaper";

export class BookInfo {
    private _ID: number;
    private _imprint: string;//nhà xuất bản;
    private _releaseNumber: number//số bản phát hành
    private _bookCode:number;

    constructor(ID: number, imprint: string, releaseNumber: number, bookCode: number) {
        this._ID = ID;
        this._imprint = imprint;
        this._releaseNumber = releaseNumber;
        this._bookCode = bookCode;
    }

    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }

    get imprint(): string {
        return this._imprint;
    }

    set imprint(value: string) {
        this._imprint = value;
    }

    get releaseNumber(): number {
        return this._releaseNumber;
    }

    set releaseNumber(value: number) {
        this._releaseNumber = value;
    }

    get bookCode(): number {
        return this._bookCode;
    }

    set bookCode(value: number) {
        this._bookCode = value;
    }
}
