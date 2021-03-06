"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//pure ng2 component
var core_1 = require('@angular/core');
var Ng2Component = (function () {
    function Ng2Component() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Ng2Component.prototype, "name", void 0);
    Ng2Component = __decorate([
        core_1.Component({
            selector: 'ng2-component',
            template: "\n      <div>hello {{name}} from ng2!</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2Component);
    return Ng2Component;
}());
exports.Ng2Component = Ng2Component;
