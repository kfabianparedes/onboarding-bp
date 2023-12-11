import { isObject } from "src/app/shared/helpers/object-helper";

export interface IUserModel {
  name: string,
  email: string,
  password: string,
  category: number[]
}

export class UserModel {
  name: string;
  email: string;
  password: string;
  category: number[];
  constructor(user: IUserModel){
    const currentValue = isObject(user) ? user : {} as IUserModel;
    this.name = currentValue.name || '';
    this.email = currentValue.email || '';
    this.password = currentValue.password || '';
    this.category = currentValue.category || [];
  }
}

