class BothLogger<OnInstance> {
  instanceLog(value: OnInstance) {
    console.log("instanceLog.value > ", value);
    return value;
  }

  //   static A: OnInstance;
  static staticLog<OnStatic>(value: OnStatic) {
    // let instanceLogValue: OnInstance;

    console.log("staticLog.value > ", value);
    return value;
  }
}

const logger = new BothLogger<number[]>();
const value = logger.instanceLog([1, 2, 3]); // number[]
// logger.instanceLog(['A', 'B', 'C']); // arguments must be number[]

const logger2 = new BothLogger();
const value2 = logger2.instanceLog("Hello"); // unknown

BothLogger.staticLog<string[]>(["a", "b", "c"]);
BothLogger.staticLog([true, false, false]);
