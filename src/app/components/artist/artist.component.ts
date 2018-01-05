import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { SearchService } from '../../services/search.service';
import { Artist } from '../../Class/artist';
import { album } from '../../Class/album';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist;
  album: album[];

  constructor( private _searchService: SearchService,
               private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params
    .map(res => res['id'])
    .subscribe( (id) => {
      this._searchService.getArtist(id)
      .subscribe(artist => {
        this.artist = artist;
        console.log(this.artist.images);
      });
      this._searchService.getAlbum(id)
      .subscribe(albums => {
        this.album = albums.items;
        console.log(this.album.length);
        for (let i = 0; i < this.album.length; i++) {
          console.log(this.album[i].name);
        }
      });
    });

  }

}
