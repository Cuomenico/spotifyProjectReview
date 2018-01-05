import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { SearchService } from '../../services/search.service';
import { Artist } from '../../Class/artist';
import { Album } from '../../Class/album';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist;
  album: Album[];

  constructor( private _searchService: SearchService,
               private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params
    .map(res => res['id'])
    .subscribe( (id) => {
      this._searchService.getArtist(id)
      .subscribe(artist => {
        this.artist = artist;
      });
    });
  }

}
