import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(){ }

  ngOnInit(): void{

  }
  userName : string= "";
  eMail : string= "";
  message : string= "";

  changeUserName(eventData: Event){
    console.log((<HTMLInputElement>eventData.target).value);
    this.userName=(<HTMLInputElement>eventData.target).value;
  }
  isUserTyping(): boolean {
    return this.userName.length > 0; // Returns true if username has content
  }

}
