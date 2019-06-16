import { PenTool } from './PenTool';
import { BrushTool } from './BrushTool';
import { Tool } from './Tool'

class App {
    size: string;
    tools: Tool[];

    constructor() {
        let penTool = new PenTool('Pen Tool')
        let brushTool = new BrushTool('Brush Tool')

        this.tools.push(penTool, brushTool);
    }
}

let app = new App();

app.tools[0].getName(); // => 'Pen Tool'
app.tools[1].getName(); // => 'Brush Tool'
app.tools[0].setColor('#f9f7ee'); // => 'Pen Tool'
app.tools[1].setColor('rgb(0,0,0,)'); // => 'Brush Tool'