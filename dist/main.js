"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    password;
    phone;
    age;
    constructor(id, name, email, password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60");
        }
    }
    displayInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}, Age: ${this.age}`);
    }
}
const user = new User(1, "John", "[EMAIL_ADDRESS]", "123456", "1234567890", 25);
user.displayInfo();
class Admin extends User {
    constructor(id, name, email, password, phone, age) {
        super(id, name, email, password, phone, age);
    }
    manageNotes() {
        console.log(this.name);
    }
}
const admin = new Admin(2, "John", "[EMAIL_ADDRESS]", "123456", "1234567890", 25);
admin.displayInfo();
admin.manageNotes();
class Note {
    id;
    title;
    content;
    userId;
    constructor(id, title, content, userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    preview() {
        return this.content.substring(0, 10) + "...";
    }
}
const note = new Note(1, "Note 1", "Content 1ekrlrekr", 1);
console.log(note.preview());
class NoteBook {
    id;
    title;
    notes = [];
    nextNoteId = 1;
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
    addNote(title, content, author) {
        const note = new Note(this.nextNoteId++, title, content, author);
        this.notes.push(note);
        return note;
    }
    removeNote(noteId) {
        const index = this.notes.findIndex((n) => n.id === noteId);
        if (index === -1)
            return false;
        this.notes.splice(index, 1);
        return true;
    }
    getNotes() {
        return [...this.notes];
    }
}
class User {
    id;
    name;
    email;
    password;
    phone;
    age;
    notebooks = [];
    constructor(id, name, email, password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60");
        }
    }
    displayInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}, Age: ${this.age}`);
    }
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
    getNotebooks() {
        return this.notebooks;
    }
}
class Note {
    id;
    title;
    content;
    author;
    constructor(id, title, content, author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
    }
    preview() {
        return this.content.substring(0, 10) + "...";
    }
}
class NoteBook {
    id;
    title;
    notes = [];
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
    addNote(note) {
        this.notes.push(note);
    }
    getNotes() {
        return this.notes;
    }
}
class Storage {
    items;
    constructor(items) {
        this.items = items;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        const index = this.items.findIndex((ele) => ele === item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    getAllItems() {
        return this.items;
    }
}
const storage = new Storage([1, 2, 3]);
storage.addItem(4);
storage.removeItem(1);
console.log(storage.getAllItems());
