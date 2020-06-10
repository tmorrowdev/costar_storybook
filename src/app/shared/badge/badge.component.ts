import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import classnames from 'classnames';

type TypeOptions = 'text' | 'primary' | 'secondary' | 'tertiary';
type ColorOptions =  'costar' | 'error';

@Component({
	selector: 'app-badge',
	templateUrl: './badge.component.html',
	styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

	@Input()
	public text = '2';

	@Input()
	public color: ColorOptions = 'costar';

	@Input()
	public type: TypeOptions = 'primary';

	get classname() {
		return classnames(`${this.type}`, `${this.color}`, 'badge');
	}

	constructor() { }

	ngOnInit(): void {
	}
}
