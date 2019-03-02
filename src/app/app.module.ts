import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([], { developmentMode: true }),
    RouterModule.forRoot([
        { path: '', loadChildren: './feature-tickets/feature-tickets.module#FeatureTicketsModule' }
    ], { initialNavigation: 'enabled' }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
