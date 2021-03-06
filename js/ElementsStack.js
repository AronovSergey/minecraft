class ElementsStack {
    constructor() {
        this.stack = [];
    }

    print() {
        console.log(this.stack);
    };

    emptyStack() {
        this.stack = [];
    }

    push(val) {
        this.stack.unshift(getClassName(val));
    };

    get first() {
        if(this.stack.length > 0){
            return this.stack[0];
        };
        return false;
    };

    get second() {
        if(this.stack.length > 1){
            return this.stack[1];
        };
        return false;
    };

    get third() {
        if(this.stack.length > 2){
            return this.stack[2];
        };
        return false;
    };

    get removeFirst() {
        if(this.stack.length > 0){
            const val = this.stack.shift(); 
            return val;
        };
        return false;
    };

    get removeSecond() {
        if(this.stack.length > 1){
            const val = this.stack[1];
            this.stack.splice(1, 1);
            return val;
        };
        return false;
    };

    get removeThird() {
        if(this.stack.length > 2){
            const val = this.stack[2];
            this.stack.splice(2, 1);
            return val;
        };
        return false;
    };   
};

function getClassName(type) {
    switch (type) {
        case 'l':
            return 'full-land';
        case 'fl':
            return 'full-land';
        case 'r':
            return 'rock';
        case 'tg':
            return 'tree-green';
        case 'tb':
            return 'tree-brown'
        default:
            console.log("Wrong element type")
            break;
    }
}