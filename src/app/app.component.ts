import { Component, OnInit } from '@angular/core';
import { CoronaService } from './shared/corona.service';
import { Subscription, BehaviorSubject, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
 
}
