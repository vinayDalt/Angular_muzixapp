import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { ActivatedRoute } from "@angular/router";
import { Track } from '../Track';


@Component({
  selector: 'app-body-smartcard',
  templateUrl: './body-smartcard.component.html',
  styleUrls: ['./body-smartcard.component.css']
})
export class BodySmartcardComponent implements OnInit {

  images: Array<Track>;
  
  constructor( private trackservice: TrackService){}
   

  ngOnInit() {   
    this.trackservice.getTrackDetails().subscribe((data: any) => {
    this.images = data.tracks.track;
    });
    
  }
  addTrack(track){

    const newTrack = new Track();
    newTrack.trackId = track.imageUrl;
    newTrack.trackName = track.imageName;
    newTrack.comment = 'track added';
    this.trackservice.addTracktoWishList(newTrack).subscribe((res: any) => {console.log(res)});
    

  }

}
