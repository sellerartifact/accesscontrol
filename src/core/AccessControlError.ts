/**
 *  Error class specific to `AccessControl`.
 *  @readonly
 *  @name AccessControl.Error
 *  @class
 *  @static
 */
class AccessControlError extends Error {
  public message: string = '';

  public name: string = 'AccessControlError';

  constructor(message = '') {
    super(message) /* istanbul ignore next */;
    this.message = message;
    // https://github.com/gotwarlost/istanbul/issues/690

    // http://stackoverflow.com/a/41429145/112731
    Object.setPrototypeOf(this, AccessControlError.prototype);
  }
}

export { AccessControlError };
