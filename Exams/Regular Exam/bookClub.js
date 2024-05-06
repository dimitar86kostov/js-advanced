class BookClub {

    constructor(library) {
        this.library = library,
            this.books = [],
            this.members = []
    }

    addBook(title, author) {

        let existingBook = this.books.find(book => book.title == title);

        if (!existingBook) {

            this.books.push({
                title,
                author
            })
        } else {
            throw new Error(`The book "${title}" by ${author} is already in ${this.library} library.`)
        };

        return `The book "${title}" by ${author} has been added to ${this.library} library.`
    }

    addMember(memberName) {

        let existingMember = this.members.find(member => member == memberName);

        if (existingMember) {
            return `Member ${memberName} is already a part of the book club.`

        } else {

            this.members.push(memberName);

            return `Member ${memberName} has been joined to the book club.`
        }

    }

    assignBookToMember(memberName, bookTitle) {
        let index = -1;
        for (let i = 0; i < this.books.length; i++) {
            const element = this.books[i];
            if (element.title == bookTitle) {
                index = i;
            }
        }
        // let existingBook = this.books.find(book => book.title == bookTitle);

        if (this.members.includes(memberName) && existingBook) {
            this.books.splice(index, 1);

            return `Member ${memberName} has been assigned the book "${existingBook.title}" by ${existingBook.author}.`
        }
        if (!this.members.includes(memberName) && index == -1) {
            let result = [];
            result.push(`Member ${memberName} not found.`);
            result.push(`Book "${bookTitle}" not found.`);
            throw new Error(result.join('\n'));

        } else if (!this.members.includes(memberName)) {
            throw new Error(`Member ${memberName} not found.`);

        } else if (!existingBook) {
            throw new Error(`Book "${bookTitle}" not found.`)
        }


        // if (!this.members.includes(memberName)) {
        //     throw new Error(`Member ${memberName} not found.`);
        // }
        // if (!existingBook) {
        //     throw new Error(`Book "${bookTitle}" not found.`)
        // }

        // this.books.splice(index, 1);

        // return `Member ${memberName} has been assigned the book "${existingBook.title}" by ${existingBook.author}.`
    }

    generateReadingReport() {

        if (this.members.length == 0) {
            throw new Error('No members in the book club.')
        }
        if (this.books.length == 0) {
            throw new Error("No available books in the library.")
        }

        let result = [];
        result.push(`Available Books in ${this.library} library:`)

        for (const { title, author } of this.books) {

            result.push(`"${title}" by ${author}`)
        }

        return result.join('\n')
    }
}

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Mary", "The Great Gatsby"));

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
console.log(myBookClub.assignBookToMember("aspdoa", "Huy"));
console.log(myBookClub.generateReadingReport());

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Peter", "The Da Vinci Code"));


// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Peter", "1984"));
// console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
// console.log(myBookClub.generateReadingReport());
