import {Component, ViewEncapsulation, Input} from '@angular/core';
import { CollapseDirective } from 'ng2-bootstrap/components/collapse';
import {BaCardBlur} from './baCardBlur.directive';

@Component({
  selector: 'ba-card',
  styles: [require('./baCard.scss')],
  directives: [BaCardBlur, CollapseDirective],
  template: require('./baCard.html'),
  encapsulation: ViewEncapsulation.None
})
export class BaCard {
  @Input() title:String;
  @Input() source:String;
  @Input() baCardClass:String;
  public isCollapsed:boolean = true;
}
