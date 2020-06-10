import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text, boolean, select, button } from '@storybook/addon-knobs';

import { ChipComponent } from './chip.component';
import { action } from '@storybook/addon-actions';


storiesOf('Chip', module)
	.addDecorator(withKnobs)
	.addDecorator(
		moduleMetadata({
			imports: [ ],
			declarations: [ChipComponent]
		}),
	)
	.add('Default', () => ({
		template: '<app-chip [color]="color" [type]="type" [text]="text"></app-chip>',
		props: {
				text: text('Text', 'Chip'),
				color: select('Color', ['costar', 'error'], 'costar'),
				type: select('Style', ['text', 'primary', 'secondary', 'tertiary'], 'primary')
			},
		}
	)	

);
