import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { SearchItem } from '../../models/search-item.model';
import { SearchItemModel } from '../../SearchItemModel';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  currentSearchItem: SearchItem = new SearchItemModel();

  constructor(private router: Router, private route: ActivatedRoute, private store: Store) {
    route.params.subscribe(params => this.currentSearchItem.id = params['id']);

  }

  ngOnInit(): void {
    this.store.pipe(map((state: any) => { return [...state.youtube.customCards, ...state.youtube.searchCards]; }))
      .subscribe(arr => {
        let detailsItem = arr.find(el => this.currentSearchItem.id === el.id);
        if (!detailsItem) {
          this.router.navigate(['/**']);
          return;
        } else {
          this.currentSearchItem = detailsItem;
        }
      });
  }


}
