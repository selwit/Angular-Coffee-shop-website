import { Component } from "@angular/core";



@Component({
    selector: 'contact-us-front',
    template:
   `<div class=" flip-card-back">
   <ng-content></ng-content>
   </div>`,
   styleUrls: ['./contact-us.component.css']
})
export class ContactUsFrontComponent{
    
}