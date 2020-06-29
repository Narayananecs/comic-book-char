import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { CharactersComponent } from './home/characters/characters.component';
import { ViewCharacterComponent } from './home/view-character/view-character.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptorService } from "./shared/interceptor.service";
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CharactersComponent,
    ViewCharacterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS,
    useClass: InterceptorService,
  multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
