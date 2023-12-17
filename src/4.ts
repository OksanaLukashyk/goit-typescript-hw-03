class Key { 
    // Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()). Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.

    constructor(private signature: number = Math.random()) { }
    
    getSignature(): number {
        return this.signature;
    }
}

class Person { 
    // Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key і зберігає їх у приватному властивості key. Клас Person повинен мати метод getKey, який повертає збережений ключ.

    constructor(private key: Key) { }
    
    getKey(): Key {
        return this.key;
    }
}

abstract class House { 
    // Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), або закрита (false), і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn, який додає об'єкт класу Person у масив tenants, якщо door відкрита. Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.

    protected door: boolean;
    protected key: Key;
    private tenants: Person[] = [];

    constructor(key: Key) {
        this.door = false;
        this.key = key;
    }
    
    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log("Person was added to tenants");
        } else {
            console.log("The door is closed");
    } 
    }
    
    abstract openDoor(key: Key): void;
}

class MyHouse extends House { 
    // Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.
    
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("Welcome! You can come in");
         } else {
            console.log("Wrong key");
    } 
    }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);


export {};