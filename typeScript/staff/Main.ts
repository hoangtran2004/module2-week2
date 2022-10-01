import {Staff} from "./Staff";
import {Manager} from "./Manager";

class Main implements Manager<Staff> {
    listStaff: Staff[] = []

    create(t:Staff) {
        this.listStaff.push(t)
    }

    delete(index: number) {
        this.listStaff.splice(index-1,1)
    }

    read() {
        return this.listStaff
    }

    readName(staff: Staff) {
        console.log(staff)

    }

}
