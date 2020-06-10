import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text, boolean, select, button } from '@storybook/addon-knobs';

import { BadgeComponent } from './badge.component';
import { action } from '@storybook/addon-actions';


storiesOf('Badge', module)
	.addDecorator(withKnobs)
	.addDecorator(
		moduleMetadata({
			imports: [ ],
			declarations: [BadgeComponent]
		}),
	)
	.add('Default', () => ({
		template: '<app-badge [color]="color" [type]="type" [text]="text"></app-badge>',
		props: {
				text: text('Text', '2'),
				color: select('Color', ['costar', 'error'], 'costar'),
				type: select('Style', ['text', 'primary', 'secondary', 'tertiary'], 'primary')
			},
		}
	)	

);
