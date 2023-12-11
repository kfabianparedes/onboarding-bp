import { FormControl, Validators } from "@angular/forms";
import { EMAIL_SIGNUP_ERROR_MESSAGES } from "../../parameters/error-message";
import { getErrorbyFormControl, getFormControlStateToInput } from "../../helpers/error-controls-helpers";
const { required, email } = Validators;

export class EmailSignUpControl extends FormControl {
  constructor() {
    super("");
    this.settingUsernameValidators();
  }

  private settingUsernameValidators() {
    this.setValidators([required,email]);
  }

  public get emailMessageError(): string {
    return getErrorbyFormControl(this, EMAIL_SIGNUP_ERROR_MESSAGES);
  }

  public get error(): string {
    return getFormControlStateToInput(this);
  }

}