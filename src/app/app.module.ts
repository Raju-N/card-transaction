import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { SharedModule } from './shared/shared.module';
// import { HomeModule } from './features/home/home.module';
// import { ListCreationModule } from './features/list-creation/list-creation.module';
// import { CardApplicationModule } from './features/card-application/card-application.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    SharedModule,
    // HomeModule,
    // CardApplicationModule,
    // ListCreationModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
