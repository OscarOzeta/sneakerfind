import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {SneakerModel} from '../../models/sneaker.model';
import {SneakerdbService} from '../../Services/sneakerdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  loadedSneakers: SneakerModel[] = [];

  constructor(private db: SneakerdbService) {
  }

  ngOnInit() {
  }

  onSubmit(title: string) {
    this.db.getSneakersByTitle(title)
      .subscribe(
        data => {
          this.loadedSneakers = data;
        }
      );
  }
}
