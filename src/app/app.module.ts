import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { WebdevComponent } from './components/webdev/webdev.component';
import { AiRobotComponent } from './components/ai-robot/ai-robot.component';
import { MobileappComponent } from './components/mobileapp/mobileapp.component';
import { DigitalMarketingComponent } from './components/digital-marketing/digital-marketing.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    WebdevComponent,
    AiRobotComponent,
    MobileappComponent,
    DigitalMarketingComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
