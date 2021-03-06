import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface IBreadcrumb {
  label: string;
  params?: Params;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class BreadCrumbService {
  public breadCrumbs$: BehaviorSubject<IBreadcrumb[]> = new BehaviorSubject<IBreadcrumb[]>(null);
  public breadcrumbs: IBreadcrumb[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.monitorRouter();
  }

  private monitorRouter() {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

    //this.router.events.subscribe(x => {
    //  console.log('x',x);
    //})


    // subscribe to the NavigationEnd event
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        const root: ActivatedRoute = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);

        this.breadCrumbs$.next(this.breadcrumbs);
      });
  }


  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

    // get the child routes
    const children: ActivatedRoute[] = route.children;

    // return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    // iterate over each children
    for (const child of children) {
      // verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      // verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      // get the route's URL segment
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

      // append route URL to URL
      url += `/${routeURL}`;

      // add breadcrumb
      const breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url
      };

      breadcrumbs.push(breadcrumb);
      this.breadcrumbs = breadcrumbs;

      // recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
