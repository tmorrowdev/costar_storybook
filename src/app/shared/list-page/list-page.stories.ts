import { storiesOf, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { withKnobs, text, boolean, select, button } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { DxDataGridModule, DxTemplateModule, DxBulletModule, DxSelectBoxModule, DxButtonModule, DxTextBoxModule } from 'devextreme-angular';
// import { DxebuttonComponent } from '../dxebutton/dxebutton.component';
import { MatSlideToggleModule  } from '@angular/material/slide-toggle';
import { MatMenuModule  } from '@angular/material/menu';

import { ListPageComponent } from './list-page.component';


storiesOf('ListPage', module)
	.addDecorator(withKnobs)
	.addDecorator(
		moduleMetadata({
			imports: [ BrowserAnimationsModule, DxDataGridModule, DxTemplateModule, DxBulletModule, DxSelectBoxModule, DxButtonModule, MatSlideToggleModule, MatMenuModule, DxTextBoxModule ],
			declarations: [ListPageComponent]
		}),
	)
	.add('Default', () => ({
		template: '<app-list-page [title]="title" [showTitle]="showTitle" [hasQueryChooser]="hasQueryChooser" [listMapToggle]="listMapToggle" [hasSearch]="hasSearch" [hasMoreMenu]="hasMoreMenu" [hasAddButton]="hasAddButton" [hasPortfolioDropdown]="hasPortfolioDropdown" [archivedRecordToggle]="archivedRecordToggle" [hasColumnChooser]="hasColumnChooser" [hasExport]="hasExport" [hasGrouping]="hasGrouping" [hasPagination]="hasPagination"></app-list-page>',
		props: {
				title: text('Title', 'Page Title'),
				showTitle : boolean('Show title?', false),
				hasQueryChooser : boolean('Enable Query Chooser?', true),
				listMapToggle : boolean('List / Map Toggle?', false),
				hasSearch : boolean('Search?', true),
				hasMoreMenu : boolean('More Menu?', true),
				hasAddButton : boolean('Add Button?', true),
				hasPortfolioDropdown : boolean('Portfolio Dropdown?', false),
				archivedRecordToggle : boolean('Archived Record Toggle?', true),
				hasColumnChooser : boolean('Enable Column Chooser?', true),
				hasExport : boolean('Allow Export?', true),
				hasGrouping : boolean('Allow Grouping?', true),
				hasPagination : boolean('Enable Pagination', false),				
			},
		}
	)	

);


