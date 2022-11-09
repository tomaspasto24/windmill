export interface User {
    name: string,
    _id: string,
    password: string,
    role: number
}/* 

export class UserClass implements User{
    name!: string;
    _id!: string;
    password!: string;
    role!: number;
    public getRole(): string {
        return this.role + '';
    }
} */