//quản lí sách :thêm,xóa,tìm kiếm,thoát,

import {BookInfo} from "../modal/bookInfo";
import {Magazine} from "../modal/Magazine";
import {Newspaper} from "../modal/Newspaper";
import {Book} from "../modal/Book";
import {BlockList} from "net";
import it from "node:test";

export class ManageBook {
    private _List: BookInfo[] = [];

    constructor() {

    }

    deleteByFilter(id: number) {
        return this._List = this._List.filter((item) => {
            return item.ID != id;
        });
    }

    getList(): BookInfo[] {
        return this._List;
    }

    setList(value: BookInfo[]) {
        this._List = value;
    }

    addBook(ManageBook: Book | Magazine | Newspaper | BookInfo) {
        this._List.push(ManageBook)
    }

    typeOfBook(bookCode: number) {
        let flag = 0;
        this._List.forEach((item) => {
                if (item.bookCode == bookCode) {
                    console.log(item);
                    flag++
                }
                if (flag == 0) {
                   return 'khong co'
                }
            }
        )
    }

}


