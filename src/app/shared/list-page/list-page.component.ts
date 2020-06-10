import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DxDataGridComponent } from "devextreme-angular";
import { ListPageService, ListPageData } from './list-page.service';

@Component({
	selector: 'app-list-page',
	templateUrl: './list-page.component.html',
	styleUrls: ['./list-page.component.scss'],
	providers: [ ListPageService ]
})
export class ListPageComponent implements OnInit {

	@Input() public title = 'Page Title';
	@Input() public showTitle = false;
	@Input() public hasQueryChooser = true;
	@Input() public listMapToggle = false;
	@Input() public hasSearch = true;
	@Input() public hasMoreMenu = true;
	@Input() public hasAddButton = true;
	@Input() public hasPortfolioDropdown = true;
	@Input() public archivedRecordToggle = true;
	@Input() public hasColumnChooser = true;
	@Input() public hasExport = true;
	@Input() public hasGrouping = true;
	@Input() public hasPagination = false;
	
	@ViewChild("ListPageDataGrid", {static: false}) dataGrid: DxDataGridComponent;

	data : ListPageData[];
	isExpanded : Boolean = true;
 	queryName : String = 'Leases by Geography';
	queries : String[] = ['Leases by Geography', 'Leases by Hierarchy', 'Lease Critical Dates', 'My Leases'];

	constructor( private service : ListPageService ) { 	
	}

	ngOnInit() {
		this.data = this.service.getData();	
	}

	setQueryName(queryName) {
		this.queryName = queryName;
	}

	// navigateToLease(event) {
	// 	this.router.navigate(['../../lease', event.data.SystemLeaseID], {relativeTo: this.route } );
	// } 	

	toggleExpanded () {
		this.isExpanded = !this.isExpanded;
	}

	exportDataGrid() {
		this.dataGrid.instance.exportToExcel(false);
	}

	showColumnChooser() {
		this.dataGrid.instance.showColumnChooser();
	}

	searchDataGrid(searchText) {
		console.log("search should be working");
		this.dataGrid.instance.searchByText(searchText);
	}
}
