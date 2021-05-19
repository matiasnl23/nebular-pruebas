import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import {
  NbButtonModule,
  NbIconModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbSidebarModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbLayoutModule,
    NbListModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
  ],
  providers: [],
})
export class HomeModule {}
