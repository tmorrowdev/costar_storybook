import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text, boolean, select, button } from '@storybook/addon-knobs';

import { action } from '@storybook/addon-actions';
import { DxDataGridModule, DxTemplateModule, DxBulletModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import { DxedatagridComponent } from './dxedatagrid.component';

storiesOf('DxeDataGrid', module)
.addDecorator(withKnobs)
.addDecorator(
  moduleMetadata({
    imports: [  DxDataGridModule,
      DxTemplateModule,
      DxBulletModule ],
    providers: [DataSource],
    declarations: [DxedatagridComponent]
  }),
)
.add('Default', () => ({
  template: '<app-dxedatagrid></app-dxedatagrid>',
  }));
