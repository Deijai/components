import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinityScrollPageRoutingModule } from './infinity-scroll-routing.module';

import { InfinityScrollPage } from './infinity-scroll.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinityScrollPageRoutingModule,
    ComponentsModule,
    ScrollingModule,
  ],
  declarations: [InfinityScrollPage]
})
export class InfinityScrollPageModule {}
