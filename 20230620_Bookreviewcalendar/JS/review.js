//URL에 있는 book parameter 값 (string)
let url_href = window.location.href;
const bookId = new URL(url_href).searchParams.get("book");
console.log(`bookId : ${bookId}, type : ${typeof bookId}`);

//bookID가 null이면, index.html로 이동
if (bookId === null) {
    window.location.href = "index.html";                 //방법 1
    //window.open("index.html", target="_top")             방법 2 - 새로운 창이 열려서 이동하는 문제 해결
}

// -> string을 number로 변환 : bookIdNumber
//let bookIdNumber = Number(bookId);        방법 1
//let bookIdNumber = parseInt(bookId);      방법 2
//let bookIdNumber = bookId * 1;            방법 3

let bookIdNumber = parseInt(bookId);
console.log(`bookIdNumber : ${bookIdNumber}, type : ${typeof bookIdNumber}`);

//books에서 하나씩 꺼내어 bookIdNumber랑 꺼낸 book의 id랑 같으면 데이터 빼자 : bookData
//bookIdNumber : URL에서 가져온 Id 값 === books 하나씩 꺼낸 book의 id 값
let bookData;

for (let book of books) {
    if (bookIdNumber === book.id) {
        bookData = book;                //id가 같으면 그 놈을 꺼내서 bookData에 넣자
        break;
    }
}
console.log(bookData);

// -> title, author, publisher, bookImage 알아내자
let title = bookData.title;
let author = bookData.author;
let publisher = bookData.publisher;
let bookImage = bookData.img;

console.log(title, author, publisher, bookImage);

// -> HTML에 넣자
const titleDiv = document.getElementsByClassName("title")[1];
titleDiv.innerHTML = title;

const authorDiv = document.getElementsByClassName("author")[1];
authorDiv.innerHTML = author;

const publisherDiv = document.getElementsByClassName("publisher")[1];
publisherDiv.innerHTML = publisher;

const bookImageDiv = document.getElementsByClassName("book-image")[0];
bookImageDiv.innerHTML = `<img src="${bookImage}"/>`; 
//다 1인 이유 : 전체에서 세는게 아니라 각각 박스에서 숫자를 세는 것임 : title 박스에서 1번째에 넣는거다

const readDateDiv = document.getElementsByClassName("read-date")[1];
let now = "2030년 2월 14일"
now = new Date();                               //()안에 아무것도 안쓰면, 현재 시각과 날짜, 요일이 출력됨

let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();

const daylist = ["월", "화", "수", "목", "금", "토", "일"];
let day = now.getDay();

now = `${year}년 ${month + 1}월 ${date}일 ${daylist[day-1]}요일`;
readDateDiv.innerHTML = now;

// const bookId = "1";
// var url_href = window.location.href;

// var url = new URL(url_href).searchParams;
// var a = parseInt(url.get("book"));

// const bookTitle = books[a-1].title;

// console.log(`bookID: ${bookId}`);
// console.log(`bookTitle: ${bookTitle}`);
