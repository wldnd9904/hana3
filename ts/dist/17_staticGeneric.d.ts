declare class BothLogger<OnInstance> {
    instanceLog(value: OnInstance): OnInstance;
    static staticLog<OnStatic>(value: OnStatic): OnStatic;
}
declare const logger: BothLogger<number[]>;
declare const value: number[];
declare const logger2: BothLogger<unknown>;
declare const value2: unknown;
