import { FormControl, Validators } from "@angular/forms";
import { getEnableErrorMessages, getErrorbyFormControl } from "../helpers/error-controls-helpers";
import { USERNAME_ERROR_MESSAGES } from "../parameters/error-message";
const { email, required, minLength } = Validators;

export class UsernameControl extends FormControl {
  constructor() {
    super("");
    this.settingUsernameValidators();
  }

  private settingUsernameValidators() {
    this.setValidators([
      required, 
      minLength(8)
    ]);
  }

  public get usernameError(): string {
    return getErrorbyFormControl(this, USERNAME_ERROR_MESSAGES);
  }

  public get error(): boolean {
    return getEnableErrorMessages(this);
  }

}