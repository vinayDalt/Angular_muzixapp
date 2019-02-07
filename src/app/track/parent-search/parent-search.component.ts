import { Component, OnInit} from '@angular/core';
import { TrackService } from '../track.service';


@Component({
  selector: 'app-parent-search',
  templateUrl: './parent-search.component.html',
  styleUrls: ['./parent-search.component.css']
})
export class ParentSearchComponent implements OnInit {



  public track = [];
  constructor(private trackService: TrackService) { }

  ngOnInit() {
    // this.trackService.getTrackDetails().subscribe(data => this.track = data);
    // console.log(this.track);
    // this.trackService.getTracks().subscribe((data: any) => {
    //   console.log(data);
    // });
    this.trackService.getTrackDetails().subscribe((data: any) => {
      console.log(data.tracks.track);
      data.tracks.track.map(element => {
        console.log('data ', element.name);
        console.log('image', element.image);
        element.image.map(url => {
            console.log('url', url);
          });
      });
    });
  }
}
