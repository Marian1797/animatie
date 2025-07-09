import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

     gameTitle= 'Hi & Lo';
     cardNumber = 0;
     cardTypes=['hearts','spades','clubs','diamonds'];
     cardSrc=''

     ngOnInit(){
      this.generateCard();  
     }
    
     generateCard(){
       this.cardNumber=Math.floor(Math.random() * 13 + 2);
       let cardTypeNo=Math.floor(Math.random() * 4);
       console.log(this.cardTypes[cardTypeNo]);
       this.cardSrc=`${this.cardNumber}_of_${this.cardTypes[cardTypeNo]}.svg`;
     }

}
