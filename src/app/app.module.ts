import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './modules/components/components.module'
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ManagerComponent } from './manager/manager.component';
import { HistoriqueComponent } from './historique/historique.component';
import { Routes, RouterModule } from '@angular/router';
const routes : Routes = [
  {path: 'home', component: FormulaireComponent},
  {path: 'history', component: HistoriqueComponent},
  {path: 'manager', component:ManagerComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
