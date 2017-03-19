import { Injectable } from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class MovieService {

  constructor(private _http: Http) { }

  get(name){
  	return this._http.get(`http://www.omdbapi.com/?s=${name}`)
  	.map((data: Response) => data.json())
  	.catch(this.handleErr)
  }

  movieDetail(id){
  	return this._http.get(`http://www.omdbapi.com/?i=${id}&plot=full`)
  	.map((data: Response) => data.json())
  	.catch(this.handleErr)
  }

    private handleErr(error){
  	return Observable.throw(error.json().error);
  }

}
