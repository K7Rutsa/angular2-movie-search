import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '.././movie.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private _movieService: MovieService, private _activatedRoute: ActivatedRoute) { }

    moviesDetails: any;
    errorMessage: string;
    id: any;

  ngOnInit() {
  	this.id = this._activatedRoute.snapshot.params['id'];

  	this._movieService.movieDetail(this.id)
  		.subscribe(data => this.moviesDetails = data, error => this.errorMessage = error)
        console.log(this.errorMessage);
   
  }

}
