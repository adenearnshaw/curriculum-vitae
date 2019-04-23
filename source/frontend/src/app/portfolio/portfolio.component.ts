import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { IPortfolioItem } from '../core/models/portfolio-item';

@Component({
  selector: 'cv-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

    public portfolioItems: IPortfolioItem[] = [];

  constructor(private readonly _dataService: DataService) { }

  public ngOnInit() {
      this.portfolioItems = this._dataService.getPortfolioItems();
  }
}
