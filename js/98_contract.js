// 1.교수들 스케줄
// 2.교수들 안겹치게
// 3.각반별로 공강 하루 만들어줘야함
// 4.교수들 연강이 4시간 넘으면 안됨
// 4-1. 교수마다 하루 최대 강의 6시간
// 5.점심시간 12~1
// 오전 : 1교시 (9~10시) 2교시 (10~11) 3교시(11~12)
// 오후 : 4교시 (12~13시) 5교시(13~14시) 6교시( 14~15시) 7교시(15~16) 8교시 (16~17시)

// -반 이름
//  +공강 요일 (넣으면 고정, 안넣으면 랜덤)

// -교수명
// -교수 스케줄(월~금 오전/오후 가능 여부)
//     [ -강의명                                ]
//     [ -학점 (1학점당 1시간)                    ]
//     [ -반 (반 목록에 없으면 안 됨)               ]
//     [ +강의실 (넣으면 같은 강의실 동시에 못 씀)     ]
//     [ +요일/시작시간(넣으면 고정, 안넣으면 랜덤)     ]
const days = ["월", "화", "수", "목", "금"];
const lunchTime = 3; //4교시
const classes = {
  호텔: { breakDay: "월" },
  커피: { breakDay: "화" },
  칵테일: { breakDay: "수" },
  드론: { breakDay: "목" },
};
const classrooms = {};
const professors = {
  홍길동: {
    월: [false, false],
    화: [false, false],
    수: [false, false],
    목: [false, false],
    금: [false, false],
  },
  김길동: {
    월: [false, false],
    화: [false, false],
    수: [false, false],
    목: [false, false],
    금: [false, false],
  },
  박길동: {
    월: [false, false],
    화: [false, false],
    수: [false, false],
    목: [false, false],
    금: [false, false],
  },
  진현수: {
    월: [false, false],
    화: [false, false],
    수: [false, false],
    목: [false, false],
    금: [false, false],
  },
};

const lectures = [
  {
    name: "라떼만들기1",
    professor: ["김길동"],
    credit: 3,
    classes: ["커피", "호텔"],
    classroom: "B203",
    day: null,
    startAt: null,
  },
  {
    name: "라떼만들기2",
    professor: ["김길동"],
    credit: 3,
    classes: ["커피"],
    classroom: "B204",
    day: null,
    startAt: null,
  },
  {
    name: "아메리카노만들기1",
    professor: ["홍길동", "김길동"],
    credit: 2,
    classes: ["커피"],
    classroom: "B203",
    day: null,
    startAt: null,
  },
  {
    name: "아메리카노만들기2",
    professor: ["홍길동"],
    credit: 1,
    classes: ["커피"],
    classroom: null,
    day: null,
    startAt: null,
  },
  {
    name: "교수회의",
    professor: ["홍길동", "김길동", "진현수", "박길동"],
    credit: 1,
    classes: ["커피"],
    classroom: null,
    day: null,
    startAt: null,
  },
];

const schedule = {}; // 모든 반별 강의가 담길 객체

// 반 설정 & 반별 공강일 채우기
for (const _class of Object.keys(classes)) {
  schedule[_class] = {};
  for (const day of days) {
    schedule[_class][day] = new Array(8).fill(
      _class.breakDay === day ? "공강" : null
    );
  }
}
for (const professor of Object.keys(professors)) {
  professors[professor].schedule = {};
  for (const day of days) {
    professors[professor].schedule[day] = new Array(8).fill(null);
    // 오전 일정
    if (professors[professor][day][0])
      for (let i of [0, 1, 2])
        professors[professor].schedule[day][i] = "개인일정";
    // 오후 일정
    if (professors[professor][day][1])
      for (let i of [4, 5, 6, 7])
        professors[professor].schedule[day][i] = "개인일정";
  }
}

function makeSchedule() {
  // 강의 섞기
  const shuffledLectures = shuffleArray(lectures);
  let progress = 0;
  // 강의 순회하며 채우기
  for (const lecture of shuffledLectures) {
    // 강의실별 시간표 없으면 생성
    if (lecture.classroom && !classrooms[lecture.classroom]) {
      classrooms[lecture.classroom] = {};
      for (const day of days) {
        classrooms[lecture.classroom][day] = new Array(8).fill(null);
      }
    }
    let assigned = false;
    while (!assigned) {
      // 요일 랜덤 선택
      const day = getRandomItemFromArray(days);
      // 그 반의 공강날이면 패스
      if (
        lecture.classes.map((_class) => classes[_class].breakDay).includes(day)
      )
        continue;
      // 시간 랜덤 선택
      const time = getRandomNumber(0, 8 - lecture.credit);
      // 강의 넣을지 여부 판단
      let canAssign = true;
      for (let i = time; i < time + lecture.credit; i++) {
        // 점심시간이면 안 됨
        if (i == lunchTime) {
          canAssign = false;
          break;
        }
        // 이미 그 교수의 강의 있으면 안 됨
        if (
          lecture.professor
            .map((prof) => professors[prof].schedule[day][i])
            .filter((item) => item != null).length
        ) {
          canAssign = false;
          break;
        }
        // 교수님 하루에 6시간까지만 할 수 있음
        if (
          lecture.professor
            .map(
              (prof) =>
                professors[prof].schedule[day].filter((item) => item != null)
                  .length
            )
            .filter((length) => length > 6 - lecture.credit).length
        ) {
          canAssign = false;
          break;
        }
        // 이미 그 반 그 시간에 강의 있으면 안 됨
        if (
          lecture.classes
            .map((_class) => schedule[_class][day][i])
            .filter((item) => item != null).length
        ) {
          canAssign = false;
          break;
        }
        // 강의실 겹치면 안 됨
        if (lecture.classroom && classrooms[lecture.classroom][day][i]) {
          canAssign = false;
          break;
        }
      }
      if (!canAssign) continue;
      for (let i = time; i < time + lecture.credit; i++) {
        lecture.classes.forEach((_class) => {
          schedule[_class][day][i] = lecture;
        });
        lecture.professor.forEach((profName) => {
          professors[profName].schedule[day][i] = lecture;
        });
        if (lecture.classroom) classrooms[lecture.classroom][day][i] = lecture;
      }
      assigned = true;
    }
    progress += 1;
    document.getElementById("progress").textContent =
      Math.round((progress / lectures.length) * 100) + "%";
  }
}
makeSchedule();

drawSchedule(schedule["커피"], "커피반 시간표");
for (const profName of Object.keys(professors)) {
  drawSchedule(professors[profName].schedule, profName + "교수님 시간표");
}
for (const classroom of Object.keys(classrooms)) {
  drawSchedule(classrooms[classroom], classroom + "강의실 시간표");
}

// 화면에 그리기
function drawSchedule(schedule, desc) {
  //테이블 생성
  const table = document.createElement("table");
  const tHead = document.createElement("thead");
  const tBody = document.createElement("tbody");
  const tHeadR = document.createElement("tr");
  const caption = document.createElement("caption");
  caption.textContent = desc;
  document.body.appendChild(table);
  table.appendChild(caption);
  table.appendChild(tHead);
  table.appendChild(tBody);
  //테이블 헤드
  for (const day of ["", ...days]) {
    const th = document.createElement("th");
    th.textContent = day;
    tHeadR.appendChild(th);
  }
  tHead.appendChild(tHeadR);
  //테이블 바디
  for (const i of [0, 1, 2, 3, 4, 5, 6, 7]) {
    const tr = document.createElement("tr");
    const tTimed = document.createElement("td");
    tTimed.textContent = `${i + 1}교시`;
    tr.appendChild(tTimed);
    for (const day of [...days]) {
      const td = document.createElement("td");
      td.innerHTML = schedule[day][i]
        ? `${schedule[day][i].name}<br/>${schedule[day][
            i
          ].professor.toString()}<br/>${schedule[day][i].classroom ?? ""}`
        : "-";
      tr.appendChild(td);
    }
    tBody.appendChild(tr);
  }
}

// 랜덤으로 배열 섞기
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// 랜덤으로 요소 뽑기
function getRandomItemFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
// 랜덤 숫자 뽑기
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
