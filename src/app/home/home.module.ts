import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import {
  NbButtonModule,
  NbLayoutModule,
  NbSidebarModule,
} from '@nebular/theme';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
  ],
})
export class HomeModule {}
