interface Manage<T> {
    Add(t: T): void;

    findAll();

    Delete(ID: number);

    edit(ID: number, t: T);

    findByID(ID:number)
}