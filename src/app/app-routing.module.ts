import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacetsContainerComponent } from './components/facets-container/facets-container.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Analytics Dashboard',
      breadcrumb: 'home'
    },
  },
  {
    path: 'facets',
    component: FacetsContainerComponent,
    data: {
      title: 'Analytics Dashboard',
      breadcrumb: 'facets'
    },
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// { path: '**', component: PageNotFoundComponent }
