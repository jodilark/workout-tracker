import { Component, OnInit, HostListener } from '@angular/core';
import * as _ from "lodash";
import * as $ from "jquery";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
@HostListener('click', ['$event.target'])
onClick(btn){
  document.addEventListener('click', this.listenForNextClick);
}
  options:any = [
    {
      id: 'one',
      icon: '',
      action: this.createNewWorkout,
      color: this.randomColor()
    },
    {
      id: 'two',
      icon: '',
      action: this.createNewWorkout,
      color: this.randomColor()
    },
    {
      id: 'three',
      icon: '',
      action: this.createNewWorkout,
      color: this.randomColor()
    }
  ]
  menuIsOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  
  listenForNextClick = (event) => {
    if(event.target.className !== 'main_menu'){
      this.closeMenu();
    }
  }

  closeMenu(){
    this.menuIsOpen = false;
    this.removeListener();
  }

  removeListener(){
    document.removeEventListener('click', this.listenForNextClick);
  }

  createNewWorkout(){
    console.log('create')
  }

  randomColor(){
    return 'rgb(' + Math.floor(Math.random() * (160 - 0) + 0) + ',' + Math.floor(Math.random() * (160 - 0) + 0) + ',' +  Math.floor(Math.random() * (160 - 0) + 0) + ')'
  }

  openMenu(){
    this.menuIsOpen = !this.menuIsOpen;
    setTimeout(() => {
      _.forEach(this.options, e => {
        $('#'+ e.id).css('background', e.color);
      });
    })
  }

}
