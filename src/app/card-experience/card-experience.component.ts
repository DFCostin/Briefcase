import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.component.html',
  styleUrl: './card-experience.component.css'
})
export class CardExperienceComponent {

  @Input() information: any;

}
