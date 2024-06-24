import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { HomeComponent } from './component/home/home.component';
import { MovieComponent } from './component/movie/movie.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environment/environment.prod';
import { RegisterComponent } from './component/register/register.component';
import {AngularFirestoreModule} from "@angular/fire/compat/firestore"
import {AngularFireStorageModule} from "@angular/fire/compat/storage"

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    MovieComponent,
    HeaderComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {  }
