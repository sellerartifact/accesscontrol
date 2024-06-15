import { AccessControl } from './';
import { Action } from './enums';
import { IAccessInfo, IQueryInfo } from './core';
/**
 *  List of reserved keywords.
 *  i.e. Roles, resources with these names are not allowed.
 */
declare const RESERVED_KEYWORDS: string[];
/**
 *  Error message to be thrown after AccessControl instance is locked.
 */
declare const ERR_LOCK = "Cannot alter the underlying grants model. AccessControl instance is locked.";
export declare type ResourceObject = {
    [actionPossession in Action]?: string[];
};
interface RoleItem {
    $extend?: string[];
    [resource: string]: string[] | ResourceObject;
}
interface Grants {
    [role: string]: RoleItem;
}
declare class utils {
    /**
     *  Gets the type of the given object.
     *  @param {Any} o
     *  @returns {String}
     */
    static type(o: any): string;
    /**
     *  Specifies whether the given value is set (other that `null` or
     *  `undefined`).
     *  @param {Any} o - Value to be checked.
     *  @returns {Boolean}
     */
    /**
     *  Specifies whether the property/key is defined on the given object.
     *  @param {Object} o
     *  @param {string} propName
     *  @returns {Boolean}
     */
    static hasDefined(o: object, propName: string): boolean;
    /**
     *  Converts the given (string) value into an array of string. Note that
     *  this does not throw if the value is not a string or array. It will
     *  silently return `[]` (empty array). So where ever it's used, the host
     *  function should consider throwing.
     *  @param {Any} value
     *  @returns {string[]}
     */
    static toStringArray(value: any): string[];
    /**
     *  Checks whether the given array consists of non-empty string items.
     *  (Array can be empty but no item should be an empty string.)
     *  @param {Array} arr - Array to be checked.
     *  @returns {Boolean}
     */
    static isFilledStringArray(arr: any[]): boolean;
    /**
     *  Checks whether the given value is an empty array.
     *  @param {Any} value - Value to be checked.
     *  @returns {Boolean}
     */
    static isEmptyArray(value: any): boolean;
    /**
     *  Ensures that the pushed item is unique in the target array.
     *  @param {Array} arr - Target array.
     *  @param {Any} item - Item to be pushed to array.
     *  @returns {Array}
     */
    static pushUniq(arr: string[], item: string): string[];
    /**
     *  Concats the given two arrays and ensures all items are unique.
     *  @param {Array} arrA
     *  @param {Array} arrB
     *  @returns {Array} - Concat'ed array.
     */
    static uniqConcat(arrA: string[], arrB: string[]): string[];
    /**
     *  Subtracts the second array from the first.
     *  @param {Array} arrA
     *  @param {Array} arrB
     *  @return {Array} - Resulting array.
     */
    static subtractArray(arrA: string[], arrB: string[]): string[];
    /**
     *  Deep freezes the given object.
     *  @param {Object} o - Object to be frozen.
     *  @returns {Object} - Frozen object.
     */
    static deepFreeze<T>(o: T): Readonly<T> | void;
    /**
     *  Similar to JS .forEach, except this allows for breaking out early,
     *  (before all iterations are executed) by returning `false`.
     *  @param array
     *  @param callback
     *  @param thisArg
     */
    static each<T>(array: T[], callback: (value: T, index: number, array: T[]) => boolean | void, thisArg?: any): void;
    /**
     *  Iterates through the keys of the given object. Breaking out early is
     *  possible by returning `false`.
     *  @param object
     *  @param callback
     *  @param thisArg
     */
    static eachKey(object: any, callback: (value: string, index: number, array: string[]) => boolean | void, thisArg?: any): void;
    static eachRole(grants: Grants, callback: (role: RoleItem, roleName: string) => void): void;
    /**
     *
     */
    static eachRoleResource(grants: Grants, callback: (role: string, resource: string) => void): void;
    /**
     *  Checks whether the given access info can be commited to grants model.
     *  @param {IAccessInfo|IQueryInfo} info
     *  @returns {Boolean}
     */
    static isInfoFulfilled(info: IAccessInfo | IQueryInfo): boolean;
    /**
     *  Checks whether the given name can be used and is not a reserved keyword.
     *
     *  @param {string} name - Name to be checked.
     *  @param {boolean} [throwOnInvalid=true] - Specifies whether to throw if
     *  name is not valid.
     *
     *  @returns {Boolean}
     *
     *  @throws {AccessControlError} - If `throwOnInvalid` is enabled and name
     *  is invalid.
     */
    static validName(name: string, throwOnInvalid?: boolean): boolean;
    /**
     *  Checks whether the given array does not contain a reserved keyword.
     *
     *  @param {string|string[]} list - Name(s) to be checked.
     *  @param {boolean} [throwOnInvalid=true] - Specifies whether to throw if
     *  name is not valid.
     *
     *  @returns {Boolean}
     *
     *  @throws {AccessControlError} - If `throwOnInvalid` is enabled and name
     *  is invalid.
     */
    static hasValidNames(list: any, throwOnInvalid?: boolean): boolean;
    /**
     *  Checks whether the given object is a valid resource definition object.
     *
     *  @param {Object} o - Resource definition to be checked.
     *
     *  @returns {Boolean}
     *
     *  @throws {AccessControlError} - If `throwOnInvalid` is enabled and object
     *  is invalid.
     */
    static validResourceObject(o: ResourceObject): boolean;
    /**
     *  Checks whether the given object is a valid role definition object.
     *
     *  @param {Object} grants - Original grants object being inspected.
     *  @param {string} roleName - Name of the role.
     *
     *  @returns {Boolean}
     *
     *  @throws {AccessControlError} - If `throwOnInvalid` is enabled and object
     *  is invalid.
     */
    static validRoleObject(grants: Grants, roleName: string): boolean;
    /**
     *  Inspects whether the given grants object has a valid structure and
     *  configuration; and returns a restructured grants object that can be used
     *  internally by AccessControl.
     *
     *  @param {Object|Array} o - Original grants object to be inspected.
     *
     *  @returns {Object} - Inspected, restructured grants object.
     *
     *  @throws {AccessControlError} - If given grants object has an invalid
     *  structure or configuration.
     */
    static getInspectedGrants(o: Grants | IAccessInfo[]): Grants;
    /**
     *  Gets all the unique resources that are granted access for at
     *  least one role.
     *
     *  @returns {string[]}
     */
    static getResources(grants: Grants): string[];
    /**
     *  Normalizes the actions and possessions in the given `IQueryInfo`.
     *
     *  @param {IQueryInfo} info
     *  @param {false} [asString=false]
     *
     *  @return {IQueryInfo}
     *
     *  @throws {AccessControlError} - If invalid action/possession found.
     */
    static normalizeActionPossession(info: IQueryInfo, asString?: false): IQueryInfo;
    /**
     *  Normalizes the actions and possessions in the given `IAccessInfo`.
     *
     *  @param {IAccessInfo} info
     *  @param {false} [asString=false]
     *
     *  @return {IAccessInfo}
     *
     *  @throws {AccessControlError} - If invalid action/possession found.
     */
    static normalizeActionPossession(info: IAccessInfo, asString?: false): IAccessInfo;
    /**
     *  Normalizes the actions and possessions in the given `IQueryInfo` or
     *  `IAccessInfo`.
     *
     *  @param {IQueryInfo|IAccessInfo} info
     *  @param {true} [asString=false]
     *
     *  @return {string}
     *
     *  @throws {AccessControlError} - If invalid action/possession found.
     */
    static normalizeActionPossession(info: IQueryInfo | IAccessInfo, asString: true): string;
    /**
     *  Normalizes the roles and resources in the given `IQueryInfo`.
     *
     *  @param {IQueryInfo} info
     *
     *  @return {IQueryInfo}
     *
     *  @throws {AccessControlError} - If invalid role/resource found.
     */
    static normalizeQueryInfo(query: IQueryInfo): IQueryInfo;
    /**
     *  Normalizes the roles and resources in the given `IAccessInfo`.
     *
     *  @param {IAccessInfo} info
     *  @param {boolean} [all=false] - Whether to validate all properties such
     *  as `action` and `possession`.
     *
     *  @return {IQueryInfo}
     *
     *  @throws {AccessControlError} - If invalid role/resource found.
     */
    static normalizeAccessInfo(access: IAccessInfo, all?: boolean): IAccessInfo;
    /**
     *  Used to re-set (prepare) the `attributes` of an `IAccessInfo` object
     *  when it's first initialized with e.g. `.grant()` or `.deny()` chain
     *  methods.
     *  @param {IAccessInfo} access
     *  @returns {IAccessInfo}
     */
    static resetAttributes(access: IAccessInfo): IAccessInfo;
    /**
     *  Gets a flat, ordered list of inherited roles for the given role.
     *  @param {Object} grants - Main grants object to be processed.
     *  @param {string} roleName - Role name to be inspected.
     *  @returns {string[]}
     */
    static getRoleHierarchyOf(grants: Grants, roleName: string, rootRole?: string): string[];
    /**
     *  Gets roles and extended roles in a flat array.
     */
    static getFlatRoles(grants: Grants, roles: string | string[]): string[];
    /**
     *  Checks the given grants model and gets an array of non-existent roles
     *  from the given roles.
     *  @param {Any} grants - Grants model to be checked.
     *  @param {string[]} roles - Roles to be checked.
     *  @returns {string[]} - Array of non-existent roles. Empty array if
     *  all exist.
     */
    static getNonExistentRoles(grants: Grants, roles: string[]): string[];
    /**
     *  Checks whether the given extender role(s) is already (cross) inherited
     *  by the given role and returns the first cross-inherited role. Otherwise,
     *  returns `false`.
     *
     *  Note that cross-inheritance is not allowed.
     *
     *  @param {Any} grants - Grants model to be checked.
     *  @param {string} roles - Target role to be checked.
     *  @param {string|string[]} extenderRoles - Extender role(s) to be checked.
     *
     *  @returns {string|null} - Returns the first cross extending role. `null`
     *  if none.
     */
    static getCrossExtendingRole(grants: Grants, roleName: string, extenderRoles: string | string[]): string;
    /**
     *  Extends the given role(s) with privileges of one or more other roles.
     *
     *  @param {Any} grants
     *  @param {string|string[]} roles Role(s) to be extended. Single role
     *         as a `String` or multiple roles as an `Array`. Note that if a
     *         role does not exist, it will be automatically created.
     *
     *  @param {string|string[]} extenderRoles Role(s) to inherit from.
     *         Single role as a `String` or multiple roles as an `Array`. Note
     *         that if a extender role does not exist, it will throw.
     *
     *  @throws {Error} If a role is extended by itself, a non-existent role or
     *          a cross-inherited role.
     */
    static extendRole(grants: Grants, roles: string | string[], extenderRoles: string | string[]): void;
    /**
     *  `utils.commitToGrants()` method already creates the roles but it's
     *  executed when the chain is terminated with either `.extend()` or an
     *  action method (e.g. `.createOwn()`). In case the chain is not
     *  terminated, we'll still (pre)create the role(s) with an empty object.
     *  @param {Any} grants
     *  @param {string|string[]} roles
     */
    static preCreateRoles(grants: Grants, roles: string | string[]): void;
    /**
     *  Commits the given `IAccessInfo` object to the grants model.
     *  CAUTION: if attributes is omitted, it will default to `['*']` which
     *  means "all attributes allowed".
     *  @param {Any} grants
     *  @param {IAccessInfo} access
     *  @param {boolean} normalizeAll
     *         Specifies whether to validate and normalize all properties of
     *         the inner `IAccessInfo` object, including `action` and `possession`.
     *  @throws {Error} If `IAccessInfo` object fails validation.
     */
    static commitToGrants(grants: Grants, access: IAccessInfo, normalizeAll?: boolean): void;
    /**
     *  When more than one role is passed, we union the permitted attributes
     *  for all given roles; so we can check whether "at least one of these
     *  roles" have the permission to execute this action.
     *  e.g. `can(['admin', 'user']).createAny('video')`
     *
     *  @param {Any} grants
     *  @param {IQueryInfo} query
     *
     *  @returns {string[]} - Array of union'ed attributes.
     */
    static getUnionAttrsOfRoles(grants: Grants, query: IQueryInfo): string[];
    /**
     *  Locks the given AccessControl instance by freezing underlying grants
     *  model and disabling all functionality to modify it.
     *  @param {AccessControl} ac
     */
    static lockAC(ac: AccessControl): void;
    /**
     *  Deep clones the source object while filtering its properties by the
     *  given attributes (glob notations). Includes all matched properties and
     *  removes the rest.
     *
     *  @param {Object} object - Object to be filtered.
     *  @param {string[]} attributes - Array of glob notations.
     *
     *  @returns {Object} - Filtered object.
     */
    static filter<T>(object: T, attributes: string[]): Partial<T>;
    /**
     *  Deep clones a single object while filtering their properties by the
     *  given attributes (glob notations). Includes all matched properties and
     *  removes the rest of the object.
     *
     *  @param {Object} arrOrObj - Single object to be filtered.
     *  @param {string[]} attributes - Array of glob notations.
     *
     *  @returns {Object}
     */
    static filterAll<T>(arrOrObj: T, attributes: string[]): Partial<T>;
    /**
     *  Deep clones the source array of objects while filtering their properties
     *  by the given attributes (glob notations). Includes all matched
     *  properties and removes the rest of each object in the array.
     *
     *  @param {Array} arrOrObj - Array of objects to be filtered.
     *  @param {string[]} attributes - Array of glob notations.
     *
     *  @returns {Array}
     */
    static filterAll<T>(arrOrObj: T[], attributes: string[]): Partial<T>[];
}
export { utils, RESERVED_KEYWORDS, ERR_LOCK, RoleItem, Grants };
