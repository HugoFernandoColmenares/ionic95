import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  currentPath: string = '';
  pages = [
    { title: 'Inicio', url: '/main/home', icon: '' },
    { title: 'Pefil', url: '/main/profile', icon: '' }
  ]

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    const awita = '';
  }

}
