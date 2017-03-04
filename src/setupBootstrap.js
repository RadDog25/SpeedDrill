/* Get bootstrap up and running with help from jQuery and Tether */
window.Tether = require('tether');
window.jQuery = window.$ = require('jquery');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.js');

//the jQuery below is used to initiate Bootstrap components

var $ = require('jquery');

$(document).ready( function () {
    $('[data-toggle="tooltip"]').tooltip({ container: 'body' });
    $('#TimerTooltip').tooltip();
    $('#StartGameModal').modal({ backdrop: "static", keyboard: false, show: false}); //setup my modal to be static as things will break otherwise
    $('#EndCompeteModal').modal({ backdrop: "static", keyboard: false, show: false});
    $('#EndPracticeModal').modal({ backdrop: "static", keyboard: false, show: false});
    $('#SubmitUsernameModal').modal({ backdrop: "static", keyboard: false, show: false});
});