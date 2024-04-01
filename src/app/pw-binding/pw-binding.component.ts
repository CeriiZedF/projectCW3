import { Component } from '@angular/core';

@Component({
  selector: 'app-pw-binding',
  templateUrl: './pw-binding.component.html',
  styleUrl: './pw-binding.component.css'
})
export class PwBindingComponent {
  isBold: boolean = false;
  isItalic: boolean = false;
  isCursive: boolean = false;
  isTr = false;
  isUnderline = false;
  fontSize: number = 24;
  fontFamily: string = "monospace";
  colors: string = "none";

  showAlert(event:Event){
    alert('click')
  }
  isVisible: boolean = true;

  toggle(){
    this.isVisible = !this.isVisible;
    
  } 

  changeBold(){
    this.isBold = !this.isBold;
  }

  changeItalic(){
    this.isItalic = !this.isItalic;
  }

  changeCursive(){
    this.isCursive = !this.isCursive;
  }

  changeUnderline(){
    this.isUnderline = !this.isUnderline;
  }

  changeTr(){
    this.isTr = !this.isTr;
  }

  selectColor(){
    
  }
}
