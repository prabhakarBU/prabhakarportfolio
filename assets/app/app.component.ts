import { Component } from '@angular/core';
import { MessageService } from './portfolio/message.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers:[MessageService]

})
export class AppComponent {
    
}