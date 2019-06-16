import { DrawingTool } from "./DrawingToolInterface";
import { Tool } from "./Tool"

class BrushTool extends Tool implements DrawingTool {

    constructor(name) {
        super(name)
    }

    draw() {
        console.log('Brush is drawing')
    }
}

export { BrushTool }