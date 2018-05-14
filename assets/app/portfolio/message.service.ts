import { Message } from "./message.model";
import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';//why ? 
import { Observable } from "rxjs/Observable";//why ? 

@Injectable()
export class MessageService{

    private messages: Message[] = [];

    constructor(private http: Http){}

    addMessage(message: Message){
        //console.log("inside message service\n"+ message);
        //this.products.push(product);
        const body = JSON.stringify(message);
        //alert("inside message service  json \n"+ body);
        const headers = new Headers({'Content-Type': 'application/json'});
        //alert("inside ProductMale token found : \n"+ token);
        //http://prabhuportfolio.us-east-2.elasticbeanstalk.com:8081
        return this.http.post('http://prabhuportfolio.us-east-2.elasticbeanstalk.com/message',body,{headers: headers} )
            .map((response: Response) =>{
                const result = response.json();
                const message = new Message(
                    result.obj.content,
                    result.obj.message);
                this.messages.push(message);
                return message;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getMessages() {
        //http://localhost:8081
        return this.http.get('http://prabhuportfolio.us-east-2.elasticbeanstalk.com/message')
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(
                        message.content,message.message)
                    );
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

}