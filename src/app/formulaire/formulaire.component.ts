import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DataFormService } from '../../app/service/data-form.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
  // providers: [ROUTER_PROVIDERS]
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
  
  // constructor(public snackBar: MatSnackBar) { }
  constructor(private dataFormService : DataFormService, private router: Router) { 
    
  }  
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
  // validate(){
  //   console.log(this.form);
  //   this.snackBar.open('Message send', 'Undo');
  //   }
    // return this.form;

    validate(){
      // console.log(this.form);
      this.dataFormService.addData(this.form);
      this.router.navigate(['./history']);
    }
  }




