import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() opened: boolean;


  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

}
