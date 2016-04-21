/*jshint browser:true */
'use strict';
require('./vendor')();                    // run an empty function  
var appModule = require('../index');

angular.element(document).ready(function () {
  angular.bootstrap(document, [appModule.name], {
    //strictDi: true
  });
});  
