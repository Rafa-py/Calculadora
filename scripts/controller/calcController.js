class CalcController { //Eu tenho classe, meu! 
    constructor() {
        this._operation = []
        this._display = document.querySelector('#display');
        this.teste();
        this.initButtons();
        this.isOperator();
        this.getLastOperation();
    }
    teste() {
    }
    addDot(){
        let op = this.Operation.join("") + ".";
        this.Operation = [op];
        this.display = op;  
    }
    clearAll() {
        this.Operation = [];
    }
    clear() {
        this.Operation.pop();
    }
    calc() {
        let op = this.Operation.join("");
        this.display = eval(op);
        this.Operation = [eval(op)];
    }
    isOperator(value) {
        return (['+', '-', '*', '/', '%'].indexOf(value) > -1)
    }
    getLastOperation() {
        return this.Operation[this.Operation.length - 1];
    }
    pushOperation(value) {
        this.Operation.push(value);
        console.log(this.Operation)
    }
    addOperation(value) {
        if (!isNaN(value)) {
            this.pushOperation(value);
        } else if (this.isOperator(value)) {
            if (this.isOperator(this.getLastOperation())) {
                this.Operation.pop();
                this.pushOperation(value);
            } else {
                this.pushOperation(value)
            }
        } else {
            console.log('Erro')
        }
    }
    execBtn(value) { //Fazer o swith 

        switch (value) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                this.addOperation(parseFloat(value));
                break;
            case '+':
                this.addOperation('+');
                break;
            case '-':
                this.addOperation('-');
                break;
            case 'X':
                this.addOperation('*');
                break;
            case '÷':
                this.addOperation('/');
                break;
            case '%':
                this.addOperation("%");
                break;
            case '¹/x':
                this.aindanãosei();
                break;
            case 'x²':
                this.aindanãosei();
                break;
            case '√':
                this.aindanãosei();
                break;
            case 'CE':
                this.clearAll();
                break;
            case 'C':
                this.clear();
                break;
            case '=':
                this.calc();
                break;
            case ',':
                this.addDot();
                break;
            default:
                this.setError();
                break;
        }
        this.setDisplay();
    }
    setDisplay() {
        this.display = this.Operation.join("");
    }

    initButtons() {

        let buttons = document.querySelectorAll('[type="button"]')

        buttons.forEach((value) => {
            this.addEventListenerAll(value, "click drag", fn => {
                let btn = value.innerHTML;
                // console.log(btn);
                this.execBtn(btn);
            })
        })
    }
    addEventListenerAll(btn, events, fn) {

        events.split(' ').forEach((event) => {
            btn.addEventListener(event, fn);
        })

    }

    get Operation() {
        return this._operation;
    }

    set Operation(value) {
        return this._operation = value;
    }

    get display() {
        return this._display.innerHTML;
    }
    set display(value) {
        return this._display.innerHTML = value;
    }

};