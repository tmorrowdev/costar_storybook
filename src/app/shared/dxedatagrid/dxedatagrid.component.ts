import { Component, Pipe, PipeTransform, enableProdMode } from '@angular/core';

import DataSource from 'devextreme/data/data_source';
import { DxedatagridService } from './dxedatagrid.service';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'app-dxedatagrid',
    templateUrl: 'dxedatagrid.component.html',
    styleUrls: ['dxedatagrid.component.scss'],
    providers: [DxedatagridService]
})
export class DxedatagridComponent {
    dataSource: DataSource;
    collapsed = false;
    contentReady = (e) => {
        if(!this.collapsed) {
            this.collapsed = true;
            e.component.expandRow(['EnviroCare']);
        }
    };
    customizeTooltip = (pointsInfo) => {
        return { text: parseInt('', pointsInfo.originalValue) + '%' };
    }

    constructor(service: DxedatagridService) {
        this.dataSource = service.getDataSource();
    }
}
