import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import classnames from 'classnames';

type TypeOptions = 'text' | 'primary' | 'secondary' | 'tertiary';
type ColorOptions =  'costar' | 'error';
type IconOptions = 'home';

@Component({
	selector: 'app-dxebutton',
	templateUrl: './dxebutton.component.html',
	styleUrls: ['./dxebutton.component.scss']
})
export class DxebuttonComponent implements OnInit {
	@Input()
	public text = 'Button';

	@Input()
	public hasIcon = false;

	@Input()
	public disabled = false;

	 @Input()
	public badge = false;

	@Input()
	public color: ColorOptions = 'costar';

	@Input()
	public type: TypeOptions = 'primary';

	@Input()
	public icon: String = 'home';

	get classname() {
			return classnames(`${this.type}`, `${this.color}`);
		}

	constructor() { }

	ngOnInit(): void {
	}

}
