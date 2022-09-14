import {LinkedList} from "./LinkedList";

let linkedList = new LinkedList();
linkedList.insertFirstNode(1);
linkedList.insertFirstNode(2);
linkedList.insertFirstNode(3);
linkedList.insertFirstNode(4);
linkedList.insertFirstNode(5);
linkedList.insertLAstNode(5);
console.log(linkedList.getSize());
console.log(linkedList.readList());
