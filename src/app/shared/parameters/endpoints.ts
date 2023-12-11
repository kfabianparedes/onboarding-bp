import { environment } from "../../../environments/environment";

export class ENDPOINTS {
  //LOGIN 
  public static LOGIN = `${environment.api}/users/login`;

  //USER
  public static USERS = `${environment.api}/users`;
  public static USER_EXIST_NAME = `${this.USERS}/exist-name`;
  public static USER_EXIST_EMAIL = `${this.USERS}/exist-email`;

}