import { Component, OnInit } from '@angular/core';
import { text } from './details.config';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  blogText = text.blogText;

  constructor() {}

  ngOnInit(): void {}
}
