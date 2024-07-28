import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'] 
})
export class CardComponent {
  //todo: consider giving these a real type 
  @Input() image: string | undefined;
  @Input() name: string | undefined;
  @Input() description: string | undefined;
}
