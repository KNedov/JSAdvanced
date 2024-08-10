class LibraryCollection {
  books = [];
  constructor(capacity) {
    this.capacity = capacity;
  }
  addBook(bookName, bookAuthor) {
    if (this.capacity == 0) {
      throw new Error("Not enough space in the collection.");
    } else {
      let paid = false;
      this.books.push({ bookName, bookAuthor, paid });
      this.capacity--;
      return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
  }
  payBook(bookName) {
    let book = this.books.find((book) => book.bookName == bookName);
    if (!book) {
      throw new Error(`${bookName} is not in the collection.`);
    } else {
      if (book.paid == true) {
        throw new Error(`${bookName} has already been paid.`);
      } else {
        book.paid = true;
        return `${bookName} has been successfully paid.`;
      }
    }
  }
  removeBook(bookName) {
    let book = this.books.find((book) => book.bookName == bookName);
    if (!book) {
      throw new Error(`"The book, you're looking for, is not found."`);
    } else {
      if (book.paid == false) {
        throw new Error(
          `${bookName} need to be paid before removing from the collection.`
        );
      } else {
        this.books = this.books.filter((b) => b.bookName !== bookName);
        this.capacity++;
        return `${bookName} remove from the collection.`;
      }
    }
  }
  getStatistics(bookAuthor) {
    let author = this.books.find((author) => author.bookAuthor == bookAuthor);
    if (bookAuthor == undefined) {
        this.books.forEach(element => {
            if(element.paid==false){element.paid='Not Paid'}
            if(element.paid==true){element.paid='Has Paid'}
        });
        this.books = this.books.sort((a, b) =>a.bookName.localeCompare(b.bookName));
        let result = [`The book collection has ${ this.capacity } empty spots left.`]
        this.books.forEach(author => {
            result.push(`${author.bookName} == ${author.bookAuthor} - ${author.paid}.`)
        });
        return result.join('\n')
      }else if (!author) {
        throw new Error(`${bookAuthor} is not in the collection.`);
      }else {
        if(author.paid==false){author.paid='Not Paid'}
        if(author.paid==true){author.paid='Has Paid'}
       else {
        return `${author.bookName} == ${bookAuthor} - ${author.paid}.`;
      }
    }  
  }
}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());

