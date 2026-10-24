
//assignments

// TypeScript OOP Assignment – Class Diagram
// Part A - System: Simple Notes Management System (7 Marks)

// 1. Base Class – User (1 Mark)
// Create a class called User. The class should contain the following properties:
// • Id (number)
// • name (String)
// • email(String)
// • Password (String)
// • Phone (String)
// • age (Number ) (Must be between 18 and 60)
// Requirements:
//  -  Use appropriate access modifiers (public, private, protected).
//  - Create a method called displayInfo()that prints the user's information.

class User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public password: string,
        public phone: string,
        public age: number
    ) {
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60");
        }
    }
    displayInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}, Age: ${this.age}`);
    }
}


//execute class

const user = new User(1, "John", "[EMAIL_ADDRESS]", "123456", "1234567890", 25);
user.displayInfo();

// 2. Inheritance – Admin User (1 Mark)
// Create a class called Admin that extends the User class.
//  Requirements:
// - The Admin class should include a method that allows the admin to manage notes.
// - Apply the concept of inheritance.

class Admin extends User {
    constructor(
        id: number,
        name: string,
        email: string,
        password: string,
        phone: string,
        age: number
    ) {
        super(id, name, email, password, phone, age)
    }
    manageNotes() {
        console.log(this.name);
    }
}

//execute class
const admin = new Admin(2, "John", "[EMAIL_ADDRESS]", "123456", "1234567890", 25);
admin.displayInfo();
admin.manageNotes();



// 3. Class - Note (1 Mark)
// Create a class called Note
// • Id (number)
// • tittle(String)
// • content(String)
// • userId(reference to User)
// Requirements:
//  - Create a method called preview() that returns a short preview of the note content.

class Note {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public userId: number
    ) { }
    preview() {
        return this.content.substring(0, 10) + "...";
    }
}
//execute class
const note = new Note(1, "Note 1", "Content 1ekrlrekr", 1);
console.log(note.preview());


// 4. Composition - NoteBook and Notes (1 Mark)
//    The NoteBook creates its Notes itself, so the Notes
//    live and die with the NoteBook.

class User {
    constructor(
        public id: number,
        public name: string
    ) { }
}

class Note {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public author: User
    ) { }

    preview(): string {
        return this.content.substring(0, 10) + "...";
    }
}

class NoteBook {
    private notes: Note[] = [];
    private nextNoteId: number = 1;

    constructor(
        public id: number,
        public title: string
    ) { }

    addNote(title: string, content: string, author: User): Note {
        const note = new Note(
            this.nextNoteId++,
            title,
            content,
            author
        );

        this.notes.push(note);
        return note;
    }

    removeNote(noteId: number): boolean {
        const index = this.notes.findIndex(
            note => note.id === noteId
        );

        if (index === -1) return false;

        this.notes.splice(index, 1);
        return true;
    }

    getNotes(): Note[] {
        return [...this.notes];
    }
}


// 5. Aggregation – User and Notebook (1 Mark)
// Create a relationship between:
//  User
//  NoteBook
// Requirements:
//  A user can own multiple notebooks.
//  This relationship should represent Aggregation.

class NoteBook {
    constructor(
        public id: number,
        public title: string
    ) { }
}

class User {
    private notebooks: NoteBook[] = [];

    constructor(
        public id: number,
        public name: string
    ) { }

    addNotebook(notebook: NoteBook): void {
        this.notebooks.push(notebook);
    }

    getNotebooks(): NoteBook[] {
        return [...this.notebooks];
    }
}

// execute
const user = new User(1, "Ali");

const notebook1 = new NoteBook(1, "Study");
const notebook2 = new NoteBook(2, "Work");

user.addNotebook(notebook1);
user.addNotebook(notebook2);

console.log(user.getNotebooks());


// 6.Association – Note and User (1 Mark)
// Create a relationship between:
// User
// Note
// Requirements:
// Each Note must have an author (the user who created it).
// This relationship should represent Association.

class User {
    constructor(
        public id: number,
        public name: string
    ) { }
}

class Note {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public author: User
    ) { }

    preview(): string {
        return this.content.substring(0, 10) + "...";
    }
}

// execute
const user = new User(1, "Ali");

const note = new Note(
    1,
    "TypeScript",
    "Learning TypeScript OOP",
    user
);

console.log(note.author.name);
console.log(note.preview());


//  7. Generics– Data Storage(1 Mark)
// Create a Generic Class called :
//  Storage
// Requirements:
//  The class should be able to store any type of data .
//  Example operations may include :
// 1. addItem ()
// 2. removeItem()
//3.  getAllItems()
//write the code
class Storage<T> {
    constructor(
        public items: T[]
    ) { }
    addItem(item: T) {
        this.items.push(item)
    }
    removeItem(item: T) {
        const index = this.items.findIndex((ele) => ele === item)
        if (index !== -1) {
            this.items.splice(index, 1)
        }
    }
    getAllItems() {
        return this.items
    }
}
const storage = new Storage<number>([1, 2, 3]);
storage.addItem(4);
storage.removeItem(1);
console.log(storage.getAllItems());





















