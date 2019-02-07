import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Track } from '../Track';
import { Image } from '../Image';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }
  

  @Input()
  imageUrl: Image;

  @Input()
  imageName: string;
 @Input()
 track: Track;

  ngOnInit() {
  }

  @Output()
  trackNameEvent = new EventEmitter<any>();

  sendTrackName(track:Track){

    console.log(track);
    this.trackNameEvent.emit(this.imageName);
  }
}


