import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { AanvraagService } from './services/aanvraag.service';
import { HttpClientModule } from '@angular/common/http';
import { windowFactory, WindowToken } from './shared/environment/window/window.token';
import { AppRoutingModule } from './app-routing.module';
import { UrlService } from './shared/urls/url.service';
import { EnvironmentService } from './shared/environment/environment.service';
import { FormsModule } from '@angular/forms';

@NgModule({
            declarations: [
              AppComponent,
              TeamComponent
            ],
              imports: [
                  BrowserModule,
                  HttpClientModule,
                  AppRoutingModule,
                  FormsModule
              ],
            providers: [
              AanvraagService,
              { provide: WindowToken, useFactory: windowFactory },
              UrlService,
              EnvironmentService
            ],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
