import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concat, forkJoin, from, fromEvent, interval, Observable } from 'rxjs';
import {  debounceTime, map, mergeAll, mergeMap, switchAll, switchMap, take, takeUntil, takeWhile } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit{

  @ViewChild("btnClick", {static : true})
    btnClick : ElementRef<HTMLButtonElement>

    @ViewChild("search", {static : true})
      search : ElementRef<HTMLInputElement>

      repos : Array<any>= []

  ngOnInit(){

    const source1$ = interval(1000).pipe(take(5))       // 01234
    const source2$ = interval(2000).pipe(take(3))       // 012

    // forkJoin([source1$, source1$]).subscribe(console.log)

    forkJoin({
      s1 : source1$,
      s2  :source2$
    }).subscribe(console.log)

    // OUTPUT : {s1 : 4 , s2: 2}

    // CONCAT - combine observables which runs in order
    // concat(source1$,  source2$).subscribe(console.log)


    // TypeAhead Suggestion
    // const search$ = fromEvent(this.search.nativeElement,"input")
    // search$.pipe(
    //   debounceTime(1000),
    //   switchMap((event : any) => {
    //     return ajax.getJSON(`https://api.github.com/users/${event.target.value}/repos`)
    //   })
    // ).subscribe((repoData:any) => {
    //   console.log(repoData)
    //   this.repos = repoData;
    // })

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




  obs$ = new Observable((observer) => {
    setTimeout(() => {
      observer.next("First Packages")
    } , 1000)
    setTimeout(() => {
      observer.next("Second Packages")
    } , 2000)
    setTimeout(() => {
      observer.next("ThirdPackages")
    } , 3000)
    setTimeout(() => {
      observer.error(new Error("Error occured..."));
    } , 5000)
    setTimeout(() => {
      observer.next("Fourth Packages")
    } , 7000)

    // observer.error(new Error('Something bad happened'))

  })

  onSubscribe(){
    console.log("Started")
    this.obs$.subscribe({
      next : (pkg) => {console.log("The Package - ", pkg)},
      error : err => console.log(err),
      complete : () => {console.log("[COMPLETED]")}
    })
    console.log("Stopped")
  }

}
