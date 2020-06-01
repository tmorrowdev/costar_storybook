import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { DxebuttonComponent } from './shared/dxebutton/dxebutton.component';

@NgModule({
  declarations: [
    AppComponent,
    DxebuttonComponent
  ],
  imports: [
    BrowserModule,
    DxButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
