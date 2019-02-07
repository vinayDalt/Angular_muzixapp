import { Injectable,} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Track } from './Track';
import { Image } from './Image';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private baseUrl = 'http://localhost:8093/api/v1/track';

  thirdpartyApi: string;
//   tracks: Array<Track>;
//   wishlisttrack: Array<Track>;
//   trackobj:Track;
//   imageobj:Image;
//   apikey:string;
//  tracksubject: BehaviorSubject<any> ;
//   country:string;
//   Suchstring:string;
//   springEndpoint:string;
//   id: number;
//   errorMsg:string;
//   errorStatus: string;
//   errorBody:string;
//   format = '&format=json';
//   limit = '&limit=10';

  constructor(private http: HttpClient) {

    this.thirdpartyApi="http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=9937fc92efd33cbfc165f9e88b1de9d9&format=json&limit=10";
    // this.apikey="9937fc92efd33cbfc165f9e88b1de9d9";
    // this.springEndpoint="localhost:8093/api/v1/track";
    // this.tracksubject = new BehaviorSubject([]);

   }

   getTrackDetails() {
  //  const url = `${this.thirdpartyApi}${this.apikey}`;
  //   console.log("url", url);
  
   return this.http.get(this.thirdpartyApi);
  }
  addTracktoWishList(track:Track){

    console.log(track);
    return this.http.post('http://localhost:8093/api/v1/track' ,track , {observe : 'response'});


  }
}
