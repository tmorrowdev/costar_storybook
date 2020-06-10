import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import classnames from 'classnames';

type TypeOptions = 'text' | 'primary' | 'secondary' | 'tertiary';
type ColorOptions =  'costar' | 'error';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

	@Input()
	public text = 'Chip';

	@Input()
	public color: ColorOptions = 'costar';

	@Input()
	public type: TypeOptions = 'primary';

	get classname() {
		return classnames(`${this.type}`, `${this.color}`, 'chip');
	}

	constructor() { }

	ngOnInit(): void {
	}

}
