import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxButtonModule, DxDataGridModule, DxTemplateModule, DxBulletModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { DxebuttonComponent } from './shared/dxebutton/dxebutton.component';
import { DxedatagridComponent } from './shared/dxedatagrid/dxedatagrid.component';
import { DxedatagridService } from './shared/dxedatagrid/dxedatagrid.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BadgeComponent } from './shared/badge/badge.component';
import { ChipComponent } from './shared/chip/chip.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { ListPageComponent } from './shared/list-page/list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DxebuttonComponent,
    DxedatagridComponent,
    BadgeComponent,
    ChipComponent,
    DropdownComponent,
    ListPageComponent
  ],
  imports: [
    BrowserModule,
    DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    BrowserAnimationsModule
  ],
  providers: [ DxedatagridService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
