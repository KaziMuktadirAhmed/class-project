import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';
import { AngularJsWelcomePageComponent } from './angular-js-welcome-page/angular-js-welcome-page.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapTableComponent,
    AngularJsWelcomePageComponent,
    UpdateBookComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
