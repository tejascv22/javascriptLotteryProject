console.log("welcome to java script")

class Book{
    static year=2025;//static variable
    constructor(title,price,npages,author){
        this.title=title;
        this.price=price;//instant variable
        this.numberofpages=npages;
        this.author=author;
    }
    //instant method
updatePrice(newPrice)   {
    this.price = newPrice;
}
// static method
static getBookName(){
    return Book.author;
}
}
/* for accessing the instance variable use object name

for accessing the static variable or static function  use class name
*/

let jsBook = new Book("javascript",300,200,"suresh");
console.log(jsBook.title)
// calling instant method and print updated price
jsBook.updatePrice(100)
console.log('the price is updated now  ',jsBook.price)
//---------------

let python = new Book("python",500,600,"tejas");
console.log(python)
console.log(Book.year)
// calling static metrhods 
console.log(Book.getBookName())
// ---------