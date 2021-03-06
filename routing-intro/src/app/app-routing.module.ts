import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SettingsComponent} from './settings/settings.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'index', component: IndexComponent },
  {path: 'home', component: HomeComponent },
  {path: 'settings', component: SettingsComponent },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
