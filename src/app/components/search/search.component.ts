import { Component, Input } from '@angular/core';
import 'rxjs/Observable';

import { SearchService } from '../../services/search.service';
import { artist } from '../../Class/artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input() searchStr: string;
  searchArtist: artist[];

  constructor(private searchService: SearchService) {
    console.clear();
  }

  searchMusic() {
    if (this.searchStr.length !== 0) {
      this.searchService.searchMusic(this.searchStr)
      .subscribe(res => {
        this.searchArtist = res.artists.items;
      });
    }else{
      this.searchArtist = [];
    }
  }
}
