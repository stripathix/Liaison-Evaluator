import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {BaPageTop, BaContentTop, BaSidebar, BaBackTop} from '../theme/components';

import {Dashboard} from './dashboard';

@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  directives: [BaPageTop, BaSidebar, BaContentTop, BaBackTop],
  template: `
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content"> 
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right">Powered By Liaison <i class="ion-heart"></i></div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
@RouteConfig([
  {
    name: 'Dashboard',
    component: Dashboard,
    path: '/dashboard',
    useAsDefault: true,
  }
])
export class Pages { 
  constructor() {
  }

  ngOnInit() {
  }
}
