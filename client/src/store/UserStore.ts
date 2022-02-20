import { makeAutoObservable } from 'mobx';

export interface IUser {
  id: number;
  email: string;
  password: string;
  role: string;
}

export interface IUserStore {
  readonly isAuth: boolean;
  readonly user: IUser;
  setIsAuth(isAuth: boolean): void;
  setUser(user: IUser): void;
  get getIsAuth(): boolean;
}

export default class UserStore implements IUserStore {
  isAuth: boolean;
  user: any;

  constructor() {
    this.isAuth = false;
    this.user = {};
    makeAutoObservable(this);
  }

  setIsAuth(isAuth: boolean): void {
    this.isAuth = isAuth;
  }

  setUser(user: any): void {
    this.user = user;
  }

  get getIsAuth(): boolean {
    return this.isAuth;
  }
}
