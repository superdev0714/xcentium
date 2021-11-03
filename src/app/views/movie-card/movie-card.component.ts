import { Component, Input, OnInit } from '@angular/core';
import { TrimmedMovie } from 'src/app/store/models';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: TrimmedMovie;

  constructor() { }

  ngOnInit(): void {
  }

}
