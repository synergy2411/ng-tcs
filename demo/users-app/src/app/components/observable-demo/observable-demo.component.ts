import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  concat,
  forkJoin,
  from,
  fromEvent,
  interval,
  Observable,
  ReplaySubject,
  Subject,
  Subscription,
} from 'rxjs';
import {
  debounceTime,
  map,
  mergeAll,
  mergeMap,
  switchAll,
  switchMap,
  take,
  takeUntil,
  takeWhile,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent implements OnInit, OnDestroy {
  @ViewChild('btnClick', { static: true })
  btnClick: ElementRef<HTMLButtonElement>;

  @ViewChild('search', { static: true })
  search: ElementRef<HTMLInputElement>;

  repos: Array<any> = [];

  constructor(private httpClient: HttpClient) {}

  unSubHttp$: Subscription;

  onUnsubHttp() {
    this.unSubHttp$.unsubscribe();
  }

  ngOnInit() {
    this.unSubHttp$ = this.httpClient
      .get(`https://api.github.com/users/synergy2411/repos`)
      .subscribe(console.log);

    // SUBJECT
    // const subject = new Subject()
    // const subject = new ReplaySubject(2)

    // subject.subscribe((pkg) => console.log("Subs 1 :", pkg ))

    // subject.next("First Pakage")
    // subject.next("Second Pakage")
    // subject.next("Third Pakage")

    // subject.subscribe((pkg) => console.log("Subs 2 :", pkg ))

    // subject.next("Fourth Pakage")

    // OUTPUT :
    // Sub 1 : first, second, third, fourth
    // Sub 2 : Fourth, second, third

    // const source1$ = interval(1000).pipe(take(5))       // 01234 - 5 seconds
    // const source2$ = interval(2000).pipe(take(3))       // 012 - 6 seconds
    // const source3$ = interval(3000).pipe(take(3))       // 012 - 9 Seconds

    // forkJoin([source1$, source1$]).subscribe(console.log)

    // forkJoin({
    //   s1 : source1$,
    //   s2 : source2$,
    //   s3 : source3$
    // }).subscribe(console.log)

    // OUTPUT : {s1 : 4 , s2: 2}

    // CONCAT - combine observables which runs in order
    // concat(source1$,  source2$).subscribe(console.log)

    // TypeAhead Suggestion
    const search$ = fromEvent(this.search.nativeElement, 'input');
    search$
      .pipe(
        debounceTime(1000),
        switchMap((event: any) => {
          return this.httpClient.get(
            `https://api.github.com/users/${event.target.value}/repos`
          );
          // .pipe()
          // return ajax.getJSON(`https://api.github.com/users/${event.target.value}/repos`)
        })
      )
      .subscribe((repoData: any) => {
        console.log(repoData);
        this.repos = repoData;
      });

    // Merge -> Merge All the request/observable
    // Switch -> stop the previous observable and give the result of new observable

    // INTERVAL, TAKE, TAKEUNTIL, TAKEWHILE, FROM, FROMEVENT
    // const fromEvent$ = fromEvent(document,"click")
    // const notifier = fromEvent(this.btnClick.nativeElement,"click")
    // const source$ = interval(1000)
    // source$.pipe(
    // take(5)
    // takeUntil(notifier)
    // takeWhile((value) => {return value < 5})
    // ).subscribe(console.log)
    // fromEvent$.subscribe(eventData => console.log(eventData))
    // const array = ["foo","bar","bam"]
    // const source$ = from(array)
    // source$.pipe(take(2)).subscribe(console.log)
  }

  unSub$: Subscription;

  obs$ = new Observable((observer) => {
    observer.next(interval(1000));
    // setTimeout(() => {
    //   observer.next("First Packages")
    // } , 1000)
    // setTimeout(() => {
    //   observer.next("Second Packages")
    // } , 2000)
    // setTimeout(() => {
    //   observer.next("ThirdPackages")
    // } , 3000)
    // setTimeout(() => {
    //   observer.next("Fourth Packages")
    //   // observer.error(new Error("Error occured..."));
    // } , 5000)
    // setTimeout(() => {
    //   observer.complete();
    // } , 7000)
  });

  onSubscribe() {
    console.log('Started');
    this.unSub$ = this.obs$.pipe(mergeAll()).subscribe(
      (num: number) => {
        console.log(num);
      },
      console.error,
      () => {
        console.log('COMPLETED');
      }
    );
    console.log('Stopped');
  }

  onUnsubscribe() {
    this.unSub$.unsubscribe();
  }

  ngOnDestroy() {
    if (this.unSub$) {
      this.unSub$.unsubscribe();
    }
  }
}
