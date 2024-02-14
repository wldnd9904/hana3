interface Page {
    readonly text: string;
}
declare function read(page: Page): void;
declare const pageIsh: {
    text: string;
};
interface HasBothFunctionTypes {
    readonly property: () => string;
    method(): string;
    property2?: () => string;
    method2?(): string;
}
declare const hasBoth: HasBothFunctionTypes;
