import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ArticlesComponent } from 'src/app/modules/articles/articles.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultComponent } from './default.component';

@NgModule({
  declarations: [DefaultComponent, DashboardComponent, PostsComponent, ArticlesComponent],
  imports: [
    SharedModule
  ]
})
export class DefaultModule { }
