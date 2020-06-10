import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text, boolean, select, button } from '@storybook/addon-knobs';

import { DxebuttonComponent } from './dxebutton.component';
import { action } from '@storybook/addon-actions';
import { DxButtonModule } from 'devextreme-angular';
import { MatIconModule  } from '@angular/material/icon';


storiesOf('DxeButton', module)
	.addDecorator(withKnobs)
	.addDecorator(
		moduleMetadata({
			imports: [ DxButtonModule, MatIconModule ],
			declarations: [DxebuttonComponent]
		}),
	)
	.add('Default', () => ({
		template: '<app-dxebutton [color]="color" [type]="type" [disabled]="disabled" [text]="text"></app-dxebutton>',
		props: {
				text: text('Text', 'Button'),
				color: select('Color', ['costar', 'error'], 'costar'),
				type: select('Style', ['text', 'primary', 'secondary', 'tertiary'], 'primary'),
				disabled: boolean('Disabled?', false)
			},
		}
	)	

);

storiesOf('DxeButton', module)	
	.addDecorator(withKnobs)
	.addDecorator(
		moduleMetadata({
			imports: [ DxButtonModule, MatIconModule ],
			declarations: [DxebuttonComponent]
		}),
	)
	.add('With Icon', () => ({
		template: '<app-dxebutton [color]="color" [type]="type" [disabled]="disabled" [text]="text" [hasIcon]="true" [icon]="icon"></app-dxebutton>',
		props: {
				text: text('Text', 'Button'),
				color: select('Color', ['costar', 'warn'], 'costar'),
				type: select('Style', ['text', 'primary', 'secondary', 'tertiary'], 'primary'),
				icon: select('Icon', ['home'], 'home'),
				disabled: boolean('Disabled?', false)
			},
		}
	)
);

// storiesOf('DxeButton', module)	
// 	.addDecorator(withKnobs)
// 	.addDecorator(
// 		moduleMetadata({
// 			imports: [ DxButtonModule, MatIconModule ],
// 			declarations: [DxebuttonComponent]
// 		}),
// 	)
// 	.add('With Badge', () => ({
// 		template: '<app-dxebutton [color]="color" [type]="type" [disabled]="disabled" [text]="text" [hasBadge]="true" ></app-dxebutton>',
// 		props: {
// 				text: text('Text', 'Button'),
// 				color: select('Color', ['costar', 'warn'], 'costar'),
// 				type: select('Style', ['text', 'primary', 'secondary', 'tertiary'], 'primary'),
// 				icon: select('Icon', ['home'], 'home'),
// 				disabled: boolean('Disabled?', false)
// 			},
// 		}
// 	)
// );

