import { Injectable } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  sideNavVisible = new BehaviorSubject(true);
  sideNavPosition = new BehaviorSubject<'over'|'side'>('side');

  constructor(private mediaObserver: MediaObserver) {
    this.handleChange();
  }

  private handleChange() {
    this.mediaObserver
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((change) => {
        this.sideNavVisible.next(change.mqAlias == 'xs' ? false : true);
        this.sideNavPosition.next(change.mqAlias == 'xs' ? 'over' : 'side');
      });
  }

  toggleMenu() {
    let nextVal = !this.sideNavVisible.value;
    this.sideNavVisible.next(nextVal);
  }
}
