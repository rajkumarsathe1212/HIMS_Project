import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { LandingComponent } from './landing.component';
import { GenderComponent } from './gender/gender.component';
import { SharedModule } from '../shared/shared.module';
import { StatesComponent } from './states/states.component';
import { DistrictsComponent } from './districts/districts.component';
import { TalukasComponent } from './talukas/talukas.component';
import { TitlesComponent } from './titles/titles.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    LandingComponent,
    GenderComponent,
    StatesComponent,
    DistrictsComponent,
    TalukasComponent,
    TitlesComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule
  ]
})
export class MasterModule { }
