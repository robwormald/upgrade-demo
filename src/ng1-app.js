"use strict";
//ng1/2 hybrid
var angular = require('angular');
var upgrade_1 = require('@angular/upgrade');
var ng2_app_1 = require('./ng2-app');
//vanilla ng1 module
var ng1Module = angular.module('ng1-module', []);
//upgrade adapter
var adapter = new upgrade_1.UpgradeAdapter();
//vanilla ng1 root component
ng1Module.component('ng1RootComponent', {
    template: "\n\t  <div>ng1 app</div>\n\t  <input ng-model=\"ctrl.myName\" />\n\t  <ng1-component name=\"ctrl.myName\"></ng1-component>\n\t  <ng2-component [name]=\"ctrl.myName\"></ng2-component>\n\t",
    controller: function () {
        this.myName = 'bob';
    },
    controllerAs: 'ctrl'
});
//vanilla ng1 component
ng1Module.component('ng1Component', {
    template: "<div>hello {{ctrl.name}} from ng1!</div>",
    bindings: {
        name: '='
    },
    controller: function () { },
    controllerAs: 'ctrl'
});
//downgraded ng2 component
ng1Module.directive('ng2Component', adapter.downgradeNg2Component(ng2_app_1.Ng2Component));
exports.bootstrap = function (el) { return adapter.bootstrap(el, ['ng1-module']); };
