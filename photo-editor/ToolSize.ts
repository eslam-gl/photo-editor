import { Tool } from './Tool'

class ToolSize extends Tool {
    size: string;

    constructor(name, size){
        super(name);
        this.size=size;
    }
    getSize() {}
}