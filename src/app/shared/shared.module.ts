import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WidgetAreaComponent } from './widgets/widget-area/widget-area.component';
import { WidgetCardComponent } from './widgets/widget-card/widget-card.component';
import { WidgetPieComponent } from './widgets/widget-pie/widget-pie.component';
import { WidgetTableComponent } from './widgets/widget-table/widget-table.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const COMPONETS = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  WidgetAreaComponent,
  WidgetCardComponent,
  WidgetPieComponent,
  WidgetTableComponent
];

const MODULES = [
  CommonModule,
  FlexLayoutModule,
  RouterModule,
  MaterialModule
];
@NgModule({
  declarations: [COMPONETS],
  imports: [
    [...MODULES],
    HighchartsChartModule,
    ChartModule,
    NgxChartsModule
  ],
  exports: [...COMPONETS, ...MODULES]
})
export class SharedModule { }
