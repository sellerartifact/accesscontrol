"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  Enumerates the possible actions of a role.
 *  An action defines the type of an operation that will be executed on a
 *  "resource" by a "role".
 *  This is known as CRUD (CREATE, READ, UPDATE, DELETE).
 *  @enum {String}
 *  @readonly
 *  @memberof! AccessControl
 */
var Action;
(function (Action) {
    /**
     *  Specifies a CREATE action to be performed on a resource.
     *  For example, an HTTP POST request or an INSERT database operation.
     *  @type {String}
     */
    Action["CREATE"] = "create";
    /**
     *  Specifies a READ action to be performed on a resource.
     *  For example, an HTTP GET request or an database SELECT operation.
     *  @type {String}
     */
    Action["READ"] = "read";
    /**
     *  Specifies an UPDATE action to be performed on a resource.
     *  For example, an HTTP PUT or POST request or an database UPDATE operation.
     *  @type {String}
     */
    Action["UPDATE"] = "update";
    /**
     *  Specifies a DELETE action to be performed on a resource.
     *  For example, an HTTP DELETE request or a database DELETE operation.
     *  @type {String}
     */
    Action["DELETE"] = "delete";
    /**
     *  Specifies a CREATE action to be performed on a resource and
     *  indicates that the action is (or not) to be performed on <b>own</b>
     *  resource(s) of the current subject.
     *  @type {String}
     */
    Action["CREATE$OWN"] = "create:own";
    /**
     *  Specifies a CREATE action to be performed on a resource and
     *  indicates that the action is (or not) to be performed on <b>any</b>
     *  resource(s); including <i>own</i> resource(s) of the current subject.
     *  @type {String}
     */
    Action["CREATE$ANY"] = "create:any";
    /**
     *  Specifies a READ action to be performed on a resource and
     *  indicates that the action is (or not) to be performed on <b>own</b>
     *  resource(s) of the current subject.
     *  @type {String}
     */
    Action["READ$OWN"] = "read:own";
    /**
     *  Specifies a READ action to be performed on a resource and
     *  indicates that the action is (or not) to be performed on <b>any</b>
     *  resource(s); including <i>own</i> resource(s) of the current subject.
     *  @type {String}
     */
    Action["READ$ANY"] = "read:any";
    /**
     *  Specifies an UPDATE action to be performed on a resource and
     *  indicates that the action is (or not) to be performed on <b>own</b>
     *  resource(s) of the current subject.
     *  @type {String}
     */
    Action["UPDATE$OWN"] = "update:own";
    /**
     *  Specifies an UPDATE action to be performed on a resource and
     *  indicates that the action is (or not) to be performed on <b>any</b>
     *  resource(s); including <i>own</i> resource(s) of the current subject.
     *  @type {String}
     */
    Action["UPDATE$ANY"] = "update:any";
    /**
     *  Specifies a DELETE action to be performed on a resource and
     *  indicates that the action is (or not) to be performed on <b>own</b>
     *  resource(s) of the current subject.
     *  @type {String}
     */
    Action["DELETE$OWN"] = "delete:own";
    /**
     *  Specifies a DELETE action to be performed on a resource and
     *  indicates that the action is (or not) to be performed on <b>any</b>
     *  resource(s); including <i>own</i> resource(s) of the current subject.
     *  @type {String}
     */
    Action["DELETE$ANY"] = "delete:any";
})(Action || (Action = {}));
exports.Action = Action;
;
