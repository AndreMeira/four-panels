/**
 * Apparently ES6 syntax doesn't work with fullpage.js
 */

try {
    window.$ = window.jQuery = require('jquery');
    require('fullpage.js');
    require('bootstrap');
} catch (e) {}
