import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { ArticlesComponent } from 'src/app/modules/articles/articles.component';

@NgModule({
  declarations: [DefaultComponent, DashboardComponent, PostsComponent, ArticlesComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,

    // Material
    MatSidenavModule,

  ]
})
export class DefaultModule { }
