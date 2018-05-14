import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
    selector: 'my-home',
    templateUrl: './about.component.html'
})
export class AboutComponent {
    
    constructor(private MessageService: MessageService){}

    onSubmit(form:NgForm){
        //alert("adding message now");
        const message = new Message(form.value.content,form.value.message);
        console.log('this message will get added : '+ message);
        //once http method are added only 'addMessage' would not work without adding subscribe
        
        this.MessageService.addMessage(message)
        .subscribe(
            data => console.log(data),
            error => console.error(error),
        );
        form.resetForm();
    }

}