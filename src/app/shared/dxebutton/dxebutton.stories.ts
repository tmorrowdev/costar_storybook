import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text, boolean, select, button } from '@storybook/addon-knobs';

import { DxebuttonComponent } from './dxebutton.component';
import { action } from '@storybook/addon-actions';
import { DxButtonModule } from 'devextreme-angular';

storiesOf('DxeButton', module)
.addDecorator(withKnobs)
.addDecorator(
  moduleMetadata({
    imports: [ DxButtonModule ],
    declarations: [DxebuttonComponent]
  }),
)
.add('Default', () => ({
  template: '<app-dxebutton [color]="color" [type]="type" [disabled]="disabled" [text]="text"></app-dxebutton>',
  props: {
      text: text('Text', 'Click Me'),
      color: select('Color', ['costar', 'costarDark', 'warn'], 'costarDark'),
      type: select('Style', ['text', 'filled', 'outlined'], 'filled'),
      disabled: boolean('Disabled?', false)
    },
  }));
