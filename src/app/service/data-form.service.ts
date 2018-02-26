import { Injectable } from '@angular/core';

@Injectable()
export class DataFormService {
  private formDatas = [
    {
      date : new Date,
      subject : "Ceci est un test",
      body : "Je suis juste un body",
      reccurence : "Toutes les semaines le lundi"
    },
    {
      date : new Date,
      subject : "Ceci est un test",
      body : "Je suis juste un body",
      reccurence : "Toutes les semaines le lundi"
    },{
      date : new Date,
      subject : "Ceci est un test",
      body : "Bonjour la populasse,Bonjour la populasse,Bonjour la populasse,Bonjour la populasse,Bonjour la populasse,Bonjour la populasse,Bonjour la populasse,Bonjour la populasse,Bonjour la populasse,Bonjour la populasse,Bonjour la populasse,Bonjour la populasse,Bonjour la populasse,Bonjour la populasse,Bonjour la populasse,Bonjour la populasse,Bonjour la populasse,Bonjour la populasse,Bonjour la populasse,",
      reccurence : "Toutes les semaines le lundi"
    },

]
  constructor() { }
  addData(formData){
    formData.date = new Date();
    this.formDatas.push(formData);
  }
  
  getAllDatas(){
    return this.formDatas;
  }
}
