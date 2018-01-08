import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { SearchService } from '../../services/search.service';
import { artist } from '../../Class/artist';
import { album } from '../../Class/album';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
<<<<<<< HEAD
  artist: Artist;
  albums: album[];
=======
  artist: artist;
  album: album[];
>>>>>>> 5ce0917a546ec0c75180024634d8c62cdd530d32

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
        this.albums = albums.items;
        console.log(this.albums.length);
        for (let i = 0; i < this.albums.length; i++) {
          console.log(this.albums);
        }
      });
    });

  }

}
