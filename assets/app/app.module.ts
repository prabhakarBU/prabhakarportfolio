import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { routing } from './app.routing';
import { HomeComponent } from './portfolio/home.component';
import { AboutComponent } from './portfolio/about.component';
import { MessageService } from './portfolio/message.service';
import { PrabhuMessage } from './portfolio/prabhu-message.component';
import { PrabhuMessages } from './portfolio/prabhu-messages.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        PrabhuMessage,
        PrabhuMessages
    ],
    imports: [BrowserModule,FormsModule,routing,HttpModule,ReactiveFormsModule],
    providers:[MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {

}