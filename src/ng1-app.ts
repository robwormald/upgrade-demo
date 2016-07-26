//ng1/2 hybrid
import * as angular from 'angular'
import { UpgradeAdapter } from '@angular/upgrade';
import { Ng2Component } from './ng2-app'

//vanilla ng1 module
const ng1Module = angular.module('ng1-module', []);

//upgrade adapter
const adapter = new UpgradeAdapter();

//vanilla ng1 root component
ng1Module.component('ng1RootComponent', {
	template: `
	  <div>ng1 app</div>
	  <input ng-model="ctrl.myName" />
	  <ng1-component name="ctrl.myName"></ng1-component>
	  <ng2-component [name]="ctrl.myName"></ng2-component>
	`,
	controller: function(){
		this.myName = 'bob'
	},
	controllerAs: 'ctrl'
});

//vanilla ng1 component
ng1Module.component('ng1Component', {
	template: `<div>hello {{ctrl.name}} from ng1!</div>`,
	bindings: {
		name: '='
	},
	controller: function(){},
	controllerAs: 'ctrl'
});

//downgraded ng2 component
ng1Module.directive('ng2Component', adapter.downgradeNg2Component(Ng2Component) as any);

export const bootstrap = (el) => adapter.bootstrap(el, ['ng1-module']);

