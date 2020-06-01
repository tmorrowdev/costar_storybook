import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import classnames from 'classnames';

type ButtonOptions = 'text' | 'filled' | 'outlined';
type ColorOptions = 'costarDark' | 'costar' | 'warn';

@Component({
  selector: 'app-dxebutton',
  templateUrl: './dxebutton.component.html',
  styleUrls: ['./dxebutton.component.scss']
})
export class DxebuttonComponent implements OnInit {
  @Input()
  public text = 'Click Me';

  @Input()
  public disabled = false;

  @Input()
  public color: ColorOptions = 'costarDark';

  @Input()
  public type: ButtonOptions = 'filled';

  get classname() {
      return classnames(`${this.type}`, `${this.color}`);
    }

  constructor() { }

  ngOnInit(): void {
  }

}
