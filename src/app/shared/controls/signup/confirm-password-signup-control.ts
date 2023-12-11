import { FormControl, Validators } from "@angular/forms";
import { CONFIRM_PASSWORD_SIGNUP_ERROR_MESSAGES } from "../../parameters/error-message";
import { getErrorbyFormControl, getFormControlStateToInput } from "../../helpers/error-controls-helpers";
const { required } = Validators

export class ConfirmPasswordSignupControl extends FormControl {

  constructor(passwordControl: FormControl) {
    super("");
    this.settingConfirmPasswordValidators(passwordControl);
  }

  private settingConfirmPasswordValidators(passwordControl: FormControl) {
    this.setValidators([
      required, 
      (control: FormControl) => this.matchPasswordValidator(control, passwordControl)
    ]);
  }

  private matchPasswordValidator(control: FormControl, passwordControl: FormControl): { [key: string]: boolean } | null  {
    if (control.value !== passwordControl.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  public get confirmPasswordMessageError(): string {
    return getErrorbyFormControl(this, CONFIRM_PASSWORD_SIGNUP_ERROR_MESSAGES);
  }

  public get error(): string {
    return getFormControlStateToInput(this);
  }

}