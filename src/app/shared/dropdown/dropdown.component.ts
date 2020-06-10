import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import classnames from 'classnames';

export class SimpleProduct {
    name: string;
    id: number;
}

@Component({
	selector: 'app-dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

	@Input() public label = 'Label';
	@Input() public placeholder = 'Select';
	@Input() public disabled = false;

	products : SimpleProduct[] = [
		{ 	name : "product 1",
			id : 1
		},
		{	name : "product 2",
			id : 2
		},
		{	name : "product 3",
			id : 3
		}
	];


	constructor() { }

	ngOnInit(): void {
	}


}
