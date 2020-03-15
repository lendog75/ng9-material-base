import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';
import { BreadCrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { ToolGroupComponent } from './components/tool-group/tool-group.component';
import { ToolRibbonComponent } from './components/tool-ribbon/tool-ribbon.component';
import { ToolComponent } from './components/tool/tool.component';

@NgModule({
  declarations: [
    ToolRibbonComponent,
    ToolGroupComponent,
    BreadCrumbComponent,
    CardComponent,
    SearchComponent,
    ToolComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule

  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    ToolRibbonComponent,
    ToolGroupComponent,
    BreadCrumbComponent,
    CardComponent,
    SearchComponent,
    ToolComponent
  ]
})
export class SharedModule {
}


