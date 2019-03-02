import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
} from '@angular/material';
import { Route, RouterModule } from '@angular/router';

import { DataAccessTicketsModule } from '../data-access-tickets/data-access-tickets.module';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketFormComponent } from './containers/ticket-form/ticket-form.component';
import { TicketShowComponent } from './containers/ticket-show/ticket-show.component';
import { TicketsComponent } from './containers/tickets/tickets.component';

export const featureTicketsRoutes: Route[] = [
  {
    path: '',
    component: TicketsComponent,
    children: [
        { path: '', component: TicketListComponent },
        { path: 'new', component: TicketFormComponent },
        { path: ':id', component: TicketShowComponent },
    ]
  }
];

const materialModules = [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSelectModule
]

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(featureTicketsRoutes),
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
    DataAccessTicketsModule
  ],
  declarations: [TicketsComponent, TicketListComponent, TicketFormComponent, TicketShowComponent]
})
export class FeatureTicketsModule {}
