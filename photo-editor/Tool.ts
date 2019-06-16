class Tool {
    name: string;

    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setColor(input) {
        if (input[0] == '#') {
            console.log('Color format has been set for' + this.name + 'as: Hex');
        } else {
            console.log('Color format has been set for' + this.name + 'as: Hex');
        }
    }
}

export { Tool }