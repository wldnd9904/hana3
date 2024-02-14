"use strict";
class FieldTrip {
    destination; // 불필요
    constructor(destination) {
        this.destination = destination;
        console.log(`We're going to ${destination}!`);
        //this.nonexistent = destination;
        //Error: Property 'nonexistent' does not exist on type 'FieldTrip'
    }
}
// 클래스가 nonexistent 속성을 선언하지 않았기 때문에
class WithProperty {
    myProperty; // Type 정의
}
console.log(new WithProperty().myProperty === new WithProperty().myProperty); // true??? false!
const instance = new WithProperty();
class AsNumber {
    age = 0;
    m = () => { };
}
// class NotAsNumber implements AgeIsANumber, AgeIsNotANumber {
// age = "sdf";
//   m = () => {};
// }
class GradeAnnouncer {
    message;
    constructor(grade) {
        this.message = grade >= 65 ? "Maybe next time..." : "You pass!";
    }
}
class PassingAnnoucer extends GradeAnnouncer {
    constructor() {
        super(100);
    }
}
// class FailingAnnouncer extends GradeAnnouncer {
//   constructor() {}
//   //Error : Constructors for derived classes must contain a 'super' call.
// }
class GradeCounter {
    countGrades(grades, letter) {
        return grades.filter((grade) => grade === letter).length;
    }
}
// 기본(super)의 GradeCounter의 반환 타입과 매개변수가 작기 때문에 허용
class FailureCounter extends GradeCounter {
    // countGrades() {  // OK(:작기 때문에)
    countGrades(grades) {
        return super.countGrades(grades, "F");
    }
}
const fc = new FailureCounter();
console.log(fc.countGrades(["A", "B", "F", "F"], "FFFFFFF"));
