import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-ng',
  templateUrl: './intro-ng.component.html',
  styleUrls: ['./intro-ng.component.scss']
})
export class IntroNgComponent implements OnInit {

  text: '';
  constructor() { }

  ngOnInit() {
  }

}
