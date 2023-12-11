import { FormControl, Validators } from "@angular/forms";
import { EMAIL_ERROR_MESSAGES } from "../parameters/error-message";
import { getEnableErrorMessages, getErrorbyFormControl } from "../helpers/error-controls-helpers";
const { email, pattern, required, minLength } = Validators;

export class EmailControl extends FormControl {
  constructor() {
    super("");
    this.settingEmailValidators();
  }

  private settingEmailValidators() {
    this.setValidators([
      email, 
      required, 
      pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/),
      minLength(8)
    ]);
  }

  public get emailError(): string {
    return getErrorbyFormControl(this, EMAIL_ERROR_MESSAGES);
  }

  public get error(): boolean {
    return getEnableErrorMessages(this);
  }
}
