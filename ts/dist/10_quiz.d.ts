type TSize = "XS" | "S" | "M" | "L" | "XL";
type TSizeOption = {
    [i in TSize]: number;
};
declare const SIZE: {
    id: TSize;
    price: number;
}[];
declare const sizeOption: TSizeOption;
declare const totalPrice: number;
