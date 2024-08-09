import { makeAutoObservable } from "mobx";
class LineStore {
    constructor() {
        makeAutoObservable(this);
    }

    line='a';

    setb(){
        this.line ='b';
    }
    setc(){
        this.line='c';
    }
    setd(){
        this.line='d';
    }
    sete(){
        this.line='e';
    }
    setf(){
        this.line='f';
    }

}

export const lineStore = new LineStore();