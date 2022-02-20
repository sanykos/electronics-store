export interface IUser {
  id: number;
  email: string;
  password: string;
  role: string;
}

export interface IUserController {
  registration(req: any, res: any): Promise<IUser>;
}
