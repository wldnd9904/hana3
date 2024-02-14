type TUser = {
    id: number;
    name: string;
};
type TUser2 = {
    id: number;
    name: string;
    addr?: string;
};
declare const lee: TUser2;
declare let tmpUser: TUser;
declare let partner: TUser;
declare let friend: TUser;
declare const xxx: {
    id: number;
    addr: string;
};
