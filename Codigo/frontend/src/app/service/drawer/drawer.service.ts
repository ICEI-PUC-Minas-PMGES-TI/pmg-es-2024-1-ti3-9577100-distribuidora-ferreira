import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private drawerSubject = new Subject<boolean>();
  
  private isDrawerOpen: boolean = false;
  
  drawerState = this.drawerSubject.asObservable();
  constructor() { }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.drawerSubject.next(this.isDrawerOpen);
  }

  getCurrentDrawerState(): boolean {
    return this.isDrawerOpen;
  }
}
