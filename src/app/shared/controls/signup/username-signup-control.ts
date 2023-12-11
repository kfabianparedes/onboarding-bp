import { AbstractControl, AsyncValidatorFn, FormControl, Validators } from "@angular/forms";
import { USERNAME_SIGNUP_ERROR_MESSAGES } from "../../parameters/error-message";
import { getErrorbyFormControl, getFormControlStateToInput } from "../../helpers/error-controls-helpers";
import { map, switchMap, timer } from "rxjs";
import { AuthClientService } from "src/app/auth/services/client-service/auth-client.service";
const { required } = Validators;
const ASYNC_VALIDATION_DELAY = 1000;

export class UsernameSignupControl extends FormControl {
  constructor(private authService: AuthClientService) {
    super("");
    this.settingUsernameValidators();
  }

  private settingUsernameValidators() {
    this.setValidators(required);
    this.setAsyncValidators(
      (control: AbstractControl) => this.validateUsername(control.value)
    )
  }

  public get usernameMessageError(): string {
    return getErrorbyFormControl(this, USERNAME_SIGNUP_ERROR_MESSAGES);
  }

  public get error(): string {
    return getFormControlStateToInput(this);
  }

  private validateUsername(username: string): ReturnType<AsyncValidatorFn> {
    return timer(ASYNC_VALIDATION_DELAY).pipe(
      switchMap(() => this.authService.isUsernameTaken$(username)),
      map( (existUsername:{ exists: boolean } ) => ( existUsername.exists ? { existUsername: true } : null)),
    );
  }

}