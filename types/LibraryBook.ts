import type {book} from './Book';
import type { Borrowable } from './Borrowable';

export class LibraryBook implements Borrowable {
    borrow: (userName: string) => void = (userName) => {
        console.log("Книга" + this.info.title + "Выдана пользователю" + 
            userName)
    };
    info: book;

    constructor(book: book){
        this.info = book;
    }
}
