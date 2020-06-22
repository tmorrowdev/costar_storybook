import { moduleMetadata } from '@storybook/angular';

import { withKnobs, text, boolean, select, button } from '@storybook/addon-knobs';

import { action } from '@storybook/addon-actions';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxebuttonComponent, TypeOptions, ColorOptions, IconOptions } from './dxebutton.component';




export default {
  title: 'Button Module',
  decorators: [withKnobs],
  parameters: {
    knobs: {
      disableDebounce: true,
    },
  },
};

export const Basic = () => {
  const content = text('text', 'Button');
  const type = select('Type',['contained', 'outlined', 'text'], 'contained');
  const color = select('Color',['costar','alert'], 'costar');
  const disabled = boolean('Disabled?', false);
  const icon = '';

  return {
    moduleMetadata: {
      imports: [DxButtonModule],
      entryComponents: [DxebuttonComponent],
      declarations: [DxebuttonComponent],
    },
    template: `<crem-button [content]="content" [color]="color" [disabled]="disabled" [type]="type"></crem-button>`,
    props: {
      content,
      type,
      color,
      disabled,
      icon
    },
  };
};

Basic.storyName = 'Basic Button';


 export const withIcon = () => {
  const content = text('text', 'Button');
  const type = select('Type',['contained', 'outlined', 'text'], 'contained');
  const color = select('Color',['costar','alert'], 'costar');
  const disabled = boolean('Disabled?', false);
  const icon = select('Icon', ['' , 'home' , 'activefolder',	'airplane' , 'aligncenter' , 'alignjustify' , 'alignleft' , 'alignright' , 'arrowdown' , 'arrowleft' , 'arrowright' , 'arrowup' , 'background' , 'blockquote' , 'bold' , 'bookmark' , 'box' , 'bulletlist' , 'car' , 'card' , 'cart' , 'chart' , 'check' , 'chevrondoubleleft' , 'chevrondoubleright' , 'chevrondown' , 'chevronleft' , 'chevronright' , 'chevronup' , 'clear' , 'clearformat' , 'clearsquare' , 'clock' , 'close' , 'codeblock' , 'coffee' , 'collapse' , 'color' , 'columnchooser' , 'columnfield' , 'comment' , 'contains' , 'contentlayout' , 'copy' , 'cut' , 'datafield' , 'decreaseindent' , 'decreaselinespacing' , 'detailslayout' , 'docfile' , 'docxfile' , 'doesnotcontain' , 'download' , 'dragvertical' , 'edit' , 'endswith' , 'equal' , 'event' , 'expand' , 'export' , 'exportpdf' , 'exportselected' , 'exportxlsx' , 'favorites' , 'fieldchooser' , 'fields' , 'file' , 'fill' , 'filter' , 'floppy' , 'font' , 'fontsize' , 'food' , 'formula' , 'fullscreen' , 'gift' , 'globe' , 'greater' , 'greaterorequal' , 'group' , 'growfont' , 'header' , 'help' , 'hidepanel' , 'hierarchy' , 'image' , 'inactivefolder' , 'increaseindent' , 'increaselinespacing' , 'info' , 'isblank' , 'isnotblank' , 'italic' , 'key' , 'less' , 'lessorequal' , 'like' , 'link' , 'map' , 'mediumiconslayout' , 'mention' , 'menu' , 'message' , 'minus' , 'money' , 'more' , 'movetofolder' , 'music' , 'newfolder' , 'notequal' , 'orderedlist' , 'overflow' , 'palette' , 'parentfolder' , 'paste' , 'pdffile' , 'percent' , 'photo' , 'pin' , 'pinleft' , 'pinright' , 'plus' , 'pptfile' , 'pptxfile' , 'preferences' , 'print' , 'product' , 'pulldown' , 'range' , 'redo' , 'refresh' , 'rename' , 'repeat' , 'rowfield' , 'rtffile' , 'runner' , 'save' , 'search' , 'selectall' , 'share' , 'showpanel' , 'shrinkfont' , 'smalliconslayout' , 'sortdown' , 'sortdowntext' , 'sorted' , 'sortup' , 'sortuptext' , 'spindown' , 'spinleft' , 'spinright' , 'spinup' , 'square' , 'startswith' , 'strike' , 'subscript' , 'superscript' , 'tags' , 'tel' , 'tips' , 'toolbox' , 'trash' , 'txtfile' , 'underline' , 'undo' , 'unpin' , 'unselectall' , 'upload' , 'user' , 'variable' , 'video' , 'warning' , 'xlsfile' , 'xlsxfile'], 'home');


 return {
  moduleMetadata: {
    imports: [DxButtonModule],
    entryComponents: [DxebuttonComponent],
    declarations: [DxebuttonComponent],
  },
  template: `<crem-button [icon]="icon" [content]="content" [color]="color" [disabled]="disabled" [type]="type"></crem-button>`,
  props: {
    content,
    type,
    color,
    disabled,
    icon
  },
};
};

withIcon.storyName = 'With Icon';






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

