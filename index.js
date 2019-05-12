const LA1 = require('living-as-one-encoder');

let _autoShare = false;
let _autoShareDoubles = false;
let _history = [];

/**
 * Log in to living as one
 * @param {string} userName
 * @param {string} password
 * @param {function} callback
 * @return {Promise<void>}
 */
function login(userName, password, callback=null)
{
    return LA1.login(userName, password, callback);
}

/**
 * Create cue
 * @param {string} name
 * @param {boolean} alwaysShare
 * @param {function} callback
 * @return {Promise<void>}
 */
function create(name, alwaysShare=false, callback=null) {
    const duplicate = _history.contains(name);
    let share = _autoShare;

    if (duplicate && !_autoShareDoubles && !alwaysShare)
        share = false;

    _history.push(name);
    return LA1.createLiveCue(name, share, callback);
}

//  Exports
exports.login = login;
exports.create = create;