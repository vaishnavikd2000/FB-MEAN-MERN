import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { FormsModule } from '@angular/forms';
import { ColorDirectiveDirective } from './directive/color-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    ColorDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
