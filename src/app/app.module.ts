import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetingModule } from './greeting/greeting.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app.router-module';
import { DoublePipe } from './double.pipe';

import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { AppSharedModule } from './shared/shared.module';
import { AppCoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, HomePageComponent, DoublePipe],
  exports: [AppComponent],
  imports: [
    AppCoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AppSharedModule,
    GreetingModule,
    MatMenuModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
