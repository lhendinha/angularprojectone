import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Componenet1Component } from './componenet1/componenet1.component';
import { Componenet2Component } from './componenet2/componenet2.component';
import { Componenet3Component } from './componenet3/componenet3.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', redirectTo: '/kaban', pathMatch: 'full' },
  { path: 'kaban', component:  Componenet1Component},
  { path: 'todo', component:  Componenet2Component},
  { path: 'grid', component: Componenet3Component},
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
