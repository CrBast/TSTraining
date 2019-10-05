class message {
    who: entity;
    msg: string;
    constructor(forWho: entity, message: string) {
        this.who = forWho;
        this.msg = message;
    }

    public message() {
        return `to: ${this.who.name} | message: ${this.msg}`
    }
}

abstract class entity {
    _name: string = "";

    public get name(): string {
        return this._name
    }

    public set name(v: string) {
        this._name = v;
    }

}

class world extends entity {
    get name(): string {
        return this._name;
    }
    set name(v: string) {
        this._name = v;
    }

    constructor(name: string) {
        super();
        this.name = name;
    }
}

let msg = new message(new world("World"), "Hello")
alert(msg.message())