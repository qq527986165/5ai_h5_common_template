var sessionGet = function (name) {
	return sessionStorage.getItem(name);
}

var sessionSet = function(name, value) {
	sessionStorage.setItem(name, value);
}

var sessionRemove = function(name) {
	sessionStorage.removeItem(name);
}

var sessionClear = function() {
	sessionStorage.clear();
}

var localGet = function (name) {
	return localStorage.getItem(name);
}

var localSet = function(name, value) {
	localStorage.setItem(name, value);
}

var localRemove = function(name) {
	localStorage.removeItem(name);
}

var localClear = function() {
	localStorage.clear();
}

const session = {
	get: sessionGet,

	set: sessionSet,

	remove: sessionRemove,

	clear: sessionClear
}

const local = {
	get: localGet,

	set: localSet,

	remove: localRemove,

	clear: localClear
}

module.exports = {
	session: session,
	local: local
}
