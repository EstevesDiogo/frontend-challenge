import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { TitleComponent } from './components/header/title/title.component';
import { ShowElementsComponent } from './components/header/show-elements/show-elements.component';
import { SendElementsComponent } from './components/header/send-elements/send-elements.component';
import { AddElementComponent } from './components/main/add-element/add-element.component';
import { ElementComponent } from './components/main/element/element.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe( 'AppComponent', () => {
  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        TitleComponent,
        ShowElementsComponent,
        SendElementsComponent,
        AddElementComponent,
        ElementComponent
      ], imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
      ]
    } ).compileComponents();
  } ) );

  it( 'should create the app', () => {
    const fixture = TestBed.createComponent( AppComponent );
    const app = fixture.debugElement.componentInstance;
    expect( app ).toBeTruthy();
  } );
} );
