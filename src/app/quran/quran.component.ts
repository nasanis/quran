import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quran',
  templateUrl: './quran.component.html',
  styleUrls: ['./quran.component.scss'],
})
export class QuranComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  nour(){
    this.router.navigateByUrl('nour')
  }

  rahmen(){
    this.router.navigateByUrl('rahmen')
  }
  lokmen(){
    this.router.navigateByUrl('lokmen')
  }

}
