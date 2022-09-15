import { Component, OnInit } from '@angular/core';
import { interval, Observable, of, zip, throttle } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  myObservable: Observable<any> = interval(1000).pipe(take(5))
    .pipe(map((x: number) => x * 7))
    .pipe(map((value) => `I got ${value}`));

  // secondObservable: Observable<any> = of("hello","bye","third")
  //   .pipe(throttle(() => interval(1000));

  constructor() { }

  ngOnInit(): void {

    this.secondObservable.subscribe((data) =>
      console.log("obs2: ", data)
      );
  }

}
