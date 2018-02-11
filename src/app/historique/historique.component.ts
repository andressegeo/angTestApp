import { Component, OnInit } from '@angular/core';
import { DataFormService } from '../service/data-form.service';
@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  private dataForms = [];
  constructor(private dataFormService : DataFormService) { 
    this.dataForms = dataFormService.getAllDatas();
  }

  ngOnInit() {
    console.log(this.dataForms);
  }

}
