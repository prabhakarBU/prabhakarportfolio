import { Component, Input } from "@angular/core";

import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'prabhu-message',
    templateUrl: './prabhu-message.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class PrabhuMessage {
    @Input() message: Message;

    constructor(private messageService: MessageService) {}

}