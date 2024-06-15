"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  Enumerates the possible possessions of a resource, for an action.
 *  A possession defines whether the action is (or not) to be performed on "own"
 *  resource(s) of the current subject or "any" resources - including "own".
 *  @enum {String}
 *  @readonly
 *  @memberof! AccessControl
 */
var Possession;
(function (Possession) {
    /**
     *  Indicates that the action is (or not) to be performed on <b>own</b>
     *  resource(s) of the current subject.
     *  @type {String}
     */
    Possession["OWN"] = "own";
    /**
     *  Indicates that the action is (or not) to be performed on <b>any</b>
     *  resource(s); including <i>own</i> resource(s) of the current subject.
     *  @type {String}
     */
    Possession["ANY"] = "any";
})(Possession || (Possession = {}));
exports.Possession = Possession;
;
