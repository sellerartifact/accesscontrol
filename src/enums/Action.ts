/**
 *  Enumerates the possible actions of a role.
 *  An action defines the type of an operation that will be executed on a
 *  "resource" by a "role".
 *  This is known as CRUD (CREATE, READ, UPDATE, DELETE).
 *  @enum {String}
 *  @readonly
 *  @memberof! AccessControl
 */
export enum Action {
  /**
   *  Specifies a CREATE action to be performed on a resource.
   *  For example, an HTTP POST request or an INSERT database operation.
   *  @type {String}
   */
  CREATE = 'create',
  /**
   *  Specifies a READ action to be performed on a resource.
   *  For example, an HTTP GET request or an database SELECT operation.
   *  @type {String}
   */
  READ = 'read',
  /**
   *  Specifies an UPDATE action to be performed on a resource.
   *  For example, an HTTP PUT or POST request or an database UPDATE operation.
   *  @type {String}
   */
  UPDATE = 'update',
  /**
   *  Specifies a DELETE action to be performed on a resource.
   *  For example, an HTTP DELETE request or a database DELETE operation.
   *  @type {String}
   */
  DELETE = 'delete',
  /**
   *  Specifies a CREATE action to be performed on a resource and
   *  indicates that the action is (or not) to be performed on <b>own</b>
   *  resource(s) of the current subject.
   *  @type {String}
   */
  CREATE$OWN = 'create:own',
  /**
   *  Specifies a CREATE action to be performed on a resource and
   *  indicates that the action is (or not) to be performed on <b>any</b>
   *  resource(s); including <i>own</i> resource(s) of the current subject.
   *  @type {String}
   */
  CREATE$ANY = 'create:any',
  /**
   *  Specifies a READ action to be performed on a resource and
   *  indicates that the action is (or not) to be performed on <b>own</b>
   *  resource(s) of the current subject.
   *  @type {String}
   */
  READ$OWN = 'read:own',
  /**
   *  Specifies a READ action to be performed on a resource and
   *  indicates that the action is (or not) to be performed on <b>any</b>
   *  resource(s); including <i>own</i> resource(s) of the current subject.
   *  @type {String}
   */
  READ$ANY = 'read:any',
  /**
   *  Specifies an UPDATE action to be performed on a resource and
   *  indicates that the action is (or not) to be performed on <b>own</b>
   *  resource(s) of the current subject.
   *  @type {String}
   */
  UPDATE$OWN = 'update:own',
  /**
   *  Specifies an UPDATE action to be performed on a resource and
   *  indicates that the action is (or not) to be performed on <b>any</b>
   *  resource(s); including <i>own</i> resource(s) of the current subject.
   *  @type {String}
   */
  UPDATE$ANY = 'update:any',
  /**
   *  Specifies a DELETE action to be performed on a resource and
   *  indicates that the action is (or not) to be performed on <b>own</b>
   *  resource(s) of the current subject.
   *  @type {String}
   */
  DELETE$OWN = 'delete:own',
  /**
   *  Specifies a DELETE action to be performed on a resource and
   *  indicates that the action is (or not) to be performed on <b>any</b>
   *  resource(s); including <i>own</i> resource(s) of the current subject.
   *  @type {String}
   */
  DELETE$ANY = 'delete:any',
}
