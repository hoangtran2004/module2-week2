import {Manager} from "../../managePeople/service/manage";
import {Product} from "../model/Product";

export class ManageProduct implements Manage<Product> {
    ProductList: Product[] = [];

    Add(t: Product): void {
        this.ProductList.push(t)
    }

    Delete(ID: number) {
    
    }

    edit(ID: number, t: Product) {
        let index1=this.findByID(ID, t);
        this.ProductList[index1]=t
    }

    findAll() {
        return this.ProductList
    }

    findByID(ID: number, t: Product) {
        for (let i = 0; i < this.ProductList.length; i++) {
            if (this.ProductList[i].IDProduct==ID) {
                console.log(this.ProductList[i])
            }else return -1
        }
    }



}