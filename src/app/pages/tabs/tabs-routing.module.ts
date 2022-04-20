import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/account',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'account', loadChildren: () => import('../alert/alert.module').then( m => m.AlertPageModule) },
      { path: 'mail', loadChildren: () => import('../list/list.module').then( m => m.ListPageModule) },
      { path: 'settings', loadChildren: () => import('../card/card.module').then( m => m.CardPageModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
