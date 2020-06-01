import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxButtonModule, DxDataGridModule, DxTemplateModule, DxBulletModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { DxebuttonComponent } from './shared/dxebutton/dxebutton.component';
import { DxedatagridComponent } from './shared/dxedatagrid/dxedatagrid.component';
import { DxedatagridService } from './shared/dxedatagrid/dxedatagrid.service';

@NgModule({
  declarations: [
    AppComponent,
    DxebuttonComponent,
    DxedatagridComponent
  ],
  imports: [
    BrowserModule,
    DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule
  ],
  providers: [ DxedatagridService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
