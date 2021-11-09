import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetingModule } from './greeting/greeting.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomePageComponent } from './home-page/home-page.component';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app.router-module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CanSeeUserGuard } from './can-see-user.guard';
import { DoublePipe } from './double.pipe';

import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomePageComponent, DoublePipe],
  exports: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AppRoutingModule,
    GreetingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatMenuModule,
    HttpClientModule,
  ],
  providers: [CanSeeUserGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
