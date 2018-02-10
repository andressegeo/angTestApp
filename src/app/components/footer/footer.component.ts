import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private fbookUrl : string = "https://www.facebook.com/gPartner.eu";
  private googleUrl: string = "https://plus.google.com/100894579649931999251";
  private twitterUrl:string = "https://twitter.com/gPartner";
  private linkedinUrl: string = "https://www.linkedin.com/company/gpartner";
  constructor() { }

  ngOnInit() {
  }

}
