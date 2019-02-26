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
      color: this.randomColor(),
      positionTop: '56px',
      positionLeft: '48px'
    },
    {
      id: 'two',
      icon: '',
      action: this.createNewWorkout,
      color: this.randomColor(),
      positionTop: '-12px',
      positionLeft: '-9px'
    },
    {
      id: 'three',
      icon: '',
      action: this.createNewWorkout,
      color: this.randomColor(),
      positionTop: '-23px',
      positionLeft: ''
    }
  ];

  menuIsOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  
  listenForNextClick = (event) => {
    const allowedClasses:any = ['button_container', 'main_menu', 'fas fa-plus'];
    if( _.indexOf(allowedClasses, event.target.className) > -1) {
      return;
    } else {
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
        $('#'+ e.id).css('top', e.positionTop);
        $('#'+ e.id).css('left', e.positionLeft);
      });
    })
  }

}
