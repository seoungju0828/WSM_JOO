//기본 : 이번달
//현재 날짜, 시각을 가져오는 객체 생성
//현재 년도, 월을 가져올 수 있음

//현재 날짜 (원하는 날짜 지정해 줄 수 있음)
var now = new Date();

//현재 년도
var year = now.getFullYear();

//현재 월 (0부터 시작이라 +1 필요)
var month = now.getMonth() + 1;

//현재 일
var date = now.getDate();

const datesContainerDiv = document.querySelectorAll(".dates.container")[0];
const setCalendar = (year, month) => {

    //제목에 현재 월 보여주기
    const titleMonthDiv = document.getElementsByClassName("month")[0];
    titleMonthDiv.innerHTML = `${month}월`;

    //달력 만들기

    //해당 월의 1일이 무슨 요일
    var firstDateDay = new Date(year, month - 1, 1).getDay();

    //해당 월의 마지막 날짜가 며칠 : 다음달의 1일 하루 전날 - 이게바로 0일
    var lastDate = new Date(year, month - 1 + 1, 0).getDate();

    //.date.item{$}*lastDate
    //for 1~lastDate
    //<div class="date item">date</div>
    for (let date=1; date<=lastDate; date++) {
        let dateItemDiv = document.createElement("div");            //<div></div>
        dateItemDiv.classList.add("date");                          //<div class="date"></div>
        dateItemDiv.classList.add("item");                          //<div class="date item"></div>
        dateItemDiv.innerHTML = date;                               //<div class="date item">날짜</div>
        
        //HTML에 .dates.container 자식으로 넣기
        datesContainerDiv.appendChild(dateItemDiv);
    }

    //1일을 firstDateDay로 옮기기
    //.dates.container의 자식 중 첫째 자식(1일)에 style grid-column-start을 주면 결과값은 6 (9월달의 경우) | 선은 1부터 시작이기때문에 (day+1 꼴임)
    let firstdateDiv = datesContainerDiv.firstElementChild;
    //CSS { grid-column-start; firstDateDay + 1; }
    firstdateDiv.style.gridColumnStart = firstDateDay + 1;              //JS에서 스타일을 줄 때는 띄어쓰기 대신 대문자로 쓰면 된다 : grid-column-start -> gridColumnStart

}

setCalendar(year, month);

//< : 저번달
const BackMonth = document.getElementsByClassName(month)[0];
BackMonth.onclick = () => {

}

//> : 다음달

