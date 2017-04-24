import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EchartsNg2Module } from 'echarts-ng2';
//import { EChartOption} from 'echarts-ng2';
import { AppComponent } from './app.component';
import {PieComponent } from './chart/pie.component';
import {ScatterComponent} from './chart/scatter.component';
import {LineComponent} from './chart/line.component';
import {MapComponent} from'./chart/map.component';
import {DashboardComponent} from './chart/dashboard.commponent';
//import { MainDataComponent} from './chart/maindata.component';
import {LableComponent} from './chart/lable.component';
import {Bar1Component} from './chart/bar1.component';
//import {Bar2Component} from './chart/bar2.component';
import {GuanJianComponent} from './chart/guanjian.component';
//import {echarts} from 'echarts/lib/echarts.js';
@NgModule({
  declarations: [
    AppComponent, 
    PieComponent,
    ScatterComponent,
    LineComponent,
    DashboardComponent,
    MapComponent,
    LableComponent,
    Bar1Component,
    GuanJianComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EchartsNg2Module
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
