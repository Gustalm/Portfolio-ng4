import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DeveloperComponent } from './developer/developer.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { CoreModule } from "app/core/core.module";
import { DeveloperModule } from "app/developer/developer.module";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    DeveloperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
