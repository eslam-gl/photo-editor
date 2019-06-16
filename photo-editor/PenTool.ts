import { DrawingTool } from "./DrawingToolInterface";
import { Tool } from "./Tool"

class PenTool extends Tool implements DrawingTool {
    constructor(name) {
        super(name)
    }
    
    draw() {
        console.log('Pen is drawing')
    }
}

export { PenTool }