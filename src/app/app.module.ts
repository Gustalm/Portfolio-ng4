import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DeveloperComponent } from './developer/developer.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { CoreModule } from "app/core/core.module";
import { DeveloperModule } from "app/developer/developer.module";
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { AboutModule } from "app/about/about.module";
import { SkillsModule } from "app/skills/skills.module";

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    DeveloperModule,
    AboutModule,
    SkillsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
