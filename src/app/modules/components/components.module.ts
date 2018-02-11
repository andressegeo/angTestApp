import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { FormulaireComponent } from '../../formulaire/formulaire.component';
import { HistoriqueComponent } from '../../historique/historique.component';
import { ManagerComponent } from '../../manager/manager.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { DataFormService } from '../../service/data-form.service';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    FormulaireComponent,
    HistoriqueComponent,
    ManagerComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    FormulaireComponent,
    HistoriqueComponent,
    ManagerComponent
  ], 
  providers : [
    DataFormService,
  ]
})
export class ComponentsModule { }
