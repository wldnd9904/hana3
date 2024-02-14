type Novel = {
    [key: string]: string | {
        id: number;
    } | boolean | undefined | symbol;
    title: string;
    addr: {
        id: number;
    };
    isFree?: boolean;
} & {
    fk: symbol;
};
declare let novel: Novel;
type X = {
    id: string;
};
type Y = {
    id: number;
};
type Z = X & Y;
