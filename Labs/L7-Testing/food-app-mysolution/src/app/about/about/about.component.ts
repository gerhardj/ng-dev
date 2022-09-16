import { Component, OnInit } from '@angular/core';
import { interval, Observable, of, zip } from 'rxjs';
import { first, map, take, tap, throttle, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  myObservable: Observable<any> = interval(1000).pipe(take(5))
    .pipe(map((x: number) => x * 7))
    .pipe(map((value) => `I got ${value}`));

  secondObservable: Observable<string> = of("hello","bye","third")
    .pipe(
      throttleTime(1000, undefined, {leading: true, trailing: true}),
      tap((data) => console.log(data)
      )
    );

  constructor() { }

  ngOnInit(): void {

    this.secondObservable.subscribe((data) =>
      console.log("obs2: ", data)
      );
  }

}
