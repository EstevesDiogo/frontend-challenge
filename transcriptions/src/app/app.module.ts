import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';
import { TitleComponent } from './components/header/title/title.component';
import { ShowElementsComponent } from './components/header/show-elements/show-elements.component';
import { SendElementsComponent } from './components/header/send-elements/send-elements.component';
import { AddElementComponent } from './components/main/add-element/add-element.component';
import { ElementComponent } from './components/main/element/element.component';

@NgModule( {
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TitleComponent,
    ShowElementsComponent,
    SendElementsComponent,
    AddElementComponent,
    ElementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {}
