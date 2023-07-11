import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showFiller = false;
  @Output() toggleSideBar: EventEmitter<boolean> = new EventEmitter();




  sideBarToggle(){
    this.toggleSideBar.emit()
  }
}
