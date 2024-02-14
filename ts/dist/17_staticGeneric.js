"use strict";
class BothLogger {
    instanceLog(value) {
        console.log("instanceLog.value > ", value);
        return value;
    }
    //   static A: OnInstance;
    static staticLog(value) {
        // let instanceLogValue: OnInstance;
        console.log("staticLog.value > ", value);
        return value;
    }
}
const logger = new BothLogger();
const value = logger.instanceLog([1, 2, 3]); // number[]
// logger.instanceLog(['A', 'B', 'C']); // arguments must be number[]
const logger2 = new BothLogger();
const value2 = logger2.instanceLog("Hello"); // unknown
BothLogger.staticLog(["a", "b", "c"]);
BothLogger.staticLog([true, false, false]);
