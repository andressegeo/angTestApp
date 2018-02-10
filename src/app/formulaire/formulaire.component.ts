import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})


export class FormulaireComponent implements OnInit {
  
  private disabled: boolean = true;
  private reccuType = [
    "Tous les jours à 9h","Toutes les semaines, le lundi","Tous les 1er du mois","Personaliser"
  ];
  private options: Object = { 
    placeholderText: 'Edit your body content here:',
    charCounterCount: true,
    charCounterMax: 1000,
    theme: "yellow"
  }
  private form = {
    subject : "",
    date : new Date(),
    body  : "",
    recurrence:""
  }
  
  constructor() { }

  ngOnInit() {
  }

  // As her name indic
  clear(){
    this.form.subject = "";
    this.form.date = new Date();
    this.form.body = "";
    this.form.recurrence = "";
  }

  // Button who, when all inputs are correct fields, create an specific html template mail
  validate(){
    console.log(this.form);
    return this.form;
  }


}

