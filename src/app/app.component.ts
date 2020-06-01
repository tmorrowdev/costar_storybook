import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { DxebuttonComponent } from './shared/dxebutton/dxebutton.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'devextreme';
  public text = 'Click this Button';

  public ngOnInit(){
    this.text = 'Click this Button';

  }


}
