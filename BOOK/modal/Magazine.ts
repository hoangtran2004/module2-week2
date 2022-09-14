//------------------tạp chí---------------------
import {BookInfo} from "./bookInfo";
export class Magazine extends BookInfo{
    private _issueNumber:number;//số phát hành;
    private _releaseMonth:number;//tháng phát hành;


    constructor(ID: number, imprint: string, releaseNumber: number, bookCode: number, issueNumber: number, releaseMonth: number) {
        super(ID, imprint, releaseNumber, bookCode);
        this._issueNumber = issueNumber;
        this._releaseMonth = releaseMonth;
    }

    get issueNumber(): number {
        return this._issueNumber;
    }

    set issueNumber(value: number) {
        this._issueNumber = value;
    }

    get releaseMonth(): number {
        return this._releaseMonth;
    }

    set releaseMonth(value: number) {
        this._releaseMonth = value;
    }
}