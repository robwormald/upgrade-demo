//pure ng2 component
import {Component, Input} from '@angular/core'

@Component({
	selector: 'ng2-component',
	template: `
      <div>hello {{name}} from ng2!</div>
	`
})
export class Ng2Component {
  @Input() name: string;
}
