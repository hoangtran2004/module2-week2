import {Staff} from "./Staff";

export interface Manager<T> {
    create(t:T);

    read();

    delete(index: number);

    readName(staff: T)
}