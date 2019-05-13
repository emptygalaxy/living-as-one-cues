const LA1 = require('living-as-one-encoder');

let _history = [];

/**
 * Log in to living as one
 * @param {string} userName
 * @param {string} password
 * @param {null|function} callback
 * @return {Promise<void>}
 */
function login(userName, password, callback=null)
{
    return LA1.login(userName, password, callback);
}


/**
 * Check if name has been created before
 * @param {string} name
 * @return {boolean}
 */
function wasCreatedBefore(name)
{
    return _history.indexOf(name) > -1;

}

/**
 * Create cue and share if it is a new cue
 * @param {string} name
 * @param {null|function} callback
 * @return {Promise<void>}
 */
function createAndShareIfNew(name, callback=null)
{
    const duplicate = wasCreatedBefore(name);
    return create(name, !duplicate, callback);
}

/**
 * Create cue
 * @param {string} name
 * @param {boolean} shared
 * @param {null|function} callback
 * @return {Promise<void>}
 */
function create(name, shared=false, callback=null) {
    _history.push(name);
    return LA1.createLiveCue(name, shared, callback);
}

//  Exports
exports.login = login;
exports.wasCreatedBefore = wasCreatedBefore;
exports.create = create;
exports.createAndShareIfNew = createAndShareIfNew;