import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericService } from 'src/app/shared/services/generic.service';
import { AuthResponse } from '../../model/authentication.model';
import { ENDPOINTS } from 'src/app/shared/parameters/endpoints';
import { HttpParams } from '@angular/common/http';
import { UserModel } from '../../model/user.model';

@Injectable()
export class AuthClientService {

  constructor(private _genericService: GenericService) { }
  
  signin$(username: string, password: string): Observable<AuthResponse> {
    const loginData = { username, password };
    return this._genericService.genericPost<AuthResponse>(ENDPOINTS.LOGIN, loginData, undefined, false);
  }

  signup$(newUser: UserModel): Observable<UserModel> {
    return this._genericService.genericPost<UserModel>(ENDPOINTS.USERS, newUser, undefined, false);
  }

  isUsernameTaken$(username: string): Observable<{ exists: boolean }> {
    return this._genericService.genericGet<{ exists: boolean }>(`${ENDPOINTS.USER_EXIST_NAME}/${username}`, undefined, false);
  }

  isEmailTaken$(email: string): Observable<{ exists: boolean }> {
    const httpParams = new HttpParams().set("email", email);
    return this._genericService.genericGet<{ exists: boolean }>(`${ENDPOINTS.USER_EXIST_EMAIL}`, httpParams, false);
  }

}
