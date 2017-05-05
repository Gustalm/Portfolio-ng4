import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CoreModule } from "app/core/core.module";
import { DeveloperModule } from "app/developer/developer.module";
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { AboutModule } from "app/about/about.module";
import { SkillsModule } from "app/skills/skills.module";
import { ExperienceModule } from "app/experience/experience.module";

@NgModule({
  declarations: [
    AppComponent,
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
    ExperienceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
