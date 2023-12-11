import { FormControl, Validators } from "@angular/forms";
import { PASSWORD_LOGIN_ERROR_MESSAGES } from "../../parameters/error-message";
import { getErrorbyFormControl, getFormControlStateToInput } from "../../helpers/error-controls-helpers";
const { pattern, required, minLength } = Validators

export class PasswordSigninControl extends FormControl {
  constructor() {
    super("");
    this.settingPasswordValidators();
  }

  private settingPasswordValidators() {
    this.setValidators([
      required, 
      pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/),
      minLength(8)
    ]);
  }

  public get passwordMessageError(): string {
    return getErrorbyFormControl(this, PASSWORD_LOGIN_ERROR_MESSAGES);
  }

  public get error(): string {
    return getFormControlStateToInput(this);
  }

}