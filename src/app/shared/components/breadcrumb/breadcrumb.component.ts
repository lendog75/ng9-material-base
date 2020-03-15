import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { BreadCrumbService } from './breadcrumb.service';

interface IBreadcrumb {
  label: string;
  params?: Params;
  url: string;
}


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {
  public breadcrumbs: IBreadcrumb[] = [];

  constructor(private breadcrumbSvc: BreadCrumbService) {
  }

  ngOnInit() {
    this.breadcrumbSvc.breadCrumbs$.subscribe(x => {
      if (x) {
        this.breadcrumbs = x;
      }
    });
  }
}
