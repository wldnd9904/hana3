declare class FieldTrip {
    destination: string;
    constructor(destination: string);
}
declare class WithProperty {
    myProperty: () => void;
}
declare const instance: WithProperty;
interface AgeIsANumber {
    age: number;
    m(): void;
}
interface AgeIsNotANumber {
    age: number | string;
    m(n: number): void;
}
declare class AsNumber implements AgeIsANumber, AgeIsNotANumber {
    age: number;
    m: () => void;
}
declare class GradeAnnouncer {
    message: string;
    constructor(grade: number);
}
declare class PassingAnnoucer extends GradeAnnouncer {
    constructor();
}
declare class GradeCounter {
    countGrades(grades: string[], letter: string): number;
}
declare class FailureCounter extends GradeCounter {
    countGrades(grades: string[]): number;
}
declare const fc: GradeCounter;
