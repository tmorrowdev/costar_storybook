import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export type TypeOptions = 'text' | 'contained' | 'outlined' ;
export type ColorOptions =  'costar-dark-blue' | 'costar' | 'error';
export type IconOptions = '' | 'home' | 'activefolder'|	'airplane' | 'aligncenter' | 'alignjustify' | 'alignleft' | 'alignright' | 'arrowdown' | 'arrowleft' | 'arrowright' | 'arrowup' | 'background' | 'blockquote' | 'bold' | 'bookmark' | 'box' | 'bulletlist' | 'car' | 'card' | 'cart' | 'chart' | 'check' | 'chevrondoubleleft' | 'chevrondoubleright' | 'chevrondown' | 'chevronleft' | 'chevronright' | 'chevronup' | 'clear' | 'clearformat' | 'clearsquare' | 'clock' | 'close' | 'codeblock' | 'coffee' | 'collapse' | 'color' | 'columnchooser' | 'columnfield' | 'comment' | 'contains' | 'contentlayout' | 'copy' | 'cut' | 'datafield' | 'decreaseindent' | 'decreaselinespacing' | 'detailslayout' | 'docfile' | 'docxfile' | 'doesnotcontain' | 'download' | 'dragvertical' | 'edit' | 'endswith' | 'equal' | 'event' | 'expand' | 'export' | 'exportpdf' | 'exportselected' | 'exportxlsx' | 'favorites' | 'fieldchooser' | 'fields' | 'file' | 'fill' | 'filter' | 'floppy' | 'font' | 'fontsize' | 'food' | 'formula' | 'fullscreen' | 'gift' | 'globe' | 'greater' | 'greaterorequal' | 'group' | 'growfont' | 'header' | 'help' | 'hidepanel' | 'hierarchy' | 'image' | 'inactivefolder' | 'increaseindent' | 'increaselinespacing' | 'info' | 'isblank' | 'isnotblank' | 'italic' | 'key' | 'less' | 'lessorequal' | 'like' | 'link' | 'map' | 'mediumiconslayout' | 'mention' | 'menu' | 'message' | 'minus' | 'money' | 'more' | 'movetofolder' | 'music' | 'newfolder' | 'notequal' | 'orderedlist' | 'overflow' | 'palette' | 'parentfolder' | 'paste' | 'pdffile' | 'percent' | 'photo' | 'pin' | 'pinleft' | 'pinright' | 'plus' | 'pptfile' | 'pptxfile' | 'preferences' | 'print' | 'product' | 'pulldown' | 'range' | 'redo' | 'refresh' | 'rename' | 'repeat' | 'rowfield' | 'rtffile' | 'runner' | 'save' | 'search' | 'selectall' | 'share' | 'showpanel' | 'shrinkfont' | 'smalliconslayout' | 'sortdown' | 'sortdowntext' | 'sorted' | 'sortup' | 'sortuptext' | 'spindown' | 'spinleft' | 'spinright' | 'spinup' | 'square' | 'startswith' | 'strike' | 'subscript' | 'superscript' | 'tags' | 'tel' | 'tips' | 'toolbox' | 'trash' | 'txtfile' | 'underline' | 'undo' | 'unpin' | 'unselectall' | 'upload' | 'user' | 'variable' | 'video' | 'warning' | 'xlsfile' | 'xlsxfile';

@Component({
	// tslint:disable-next-line: component-selector
	selector: 'crem-button',
  template:  `<dx-button [stylingMode]="type"
  [text]="content"
  [type]="color"
  [disabled]="disabled"
  [icon]="icon"></dx-button> `,
	styleUrls: ['dxebutton.component.scss']
})
export class DxebuttonComponent implements OnInit {
	@Input()
	public content : string;

	@Input()
	public disabled : boolean;

	@Input()
	public color: ColorOptions;

	@Input()
	public type: TypeOptions;

	@Input()
	public icon: IconOptions;


	constructor() { }

	ngOnInit(): void {
	}

}
