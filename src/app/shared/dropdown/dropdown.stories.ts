import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text, boolean, select, button } from '@storybook/addon-knobs';

import { DropdownComponent } from './dropdown.component';
import { action } from '@storybook/addon-actions';
import { DxSelectBoxModule } from 'devextreme-angular';


storiesOf('Dropdown', module)
	.addDecorator(withKnobs)
	.addDecorator(
		moduleMetadata({
			imports: [ DxSelectBoxModule ],
			declarations: [DropdownComponent]
		}),
	)
	.add('Default', () => ({
		template: '<app-dropdown [label]="label" [placeholder]="placeholder" [disabled]="disabled"></app-dropdown>',
		props: {
				label: text('label', 'Label'),
				placeholder: text('placeholder', 'Select'),
				disabled: boolean('Disabled?', false),
			},
		}
	)	

);
