import { Component } from '@angular/core';
import { style, state, animate, transition, trigger } from '@angular/animations';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate('0.2s 0.2s ease-in', style({opacity:1}))
      ]),
      transition(':leave', [   // :enter is alias to 'void => *'
        style({opacity:1}),
        animate('0.2s ease-in', style({opacity:0}))
      ])
    ])
  ]
})
export class AppComponent {
  showDefinition = false;
  $stage: Observable<number>;

  constructor(
    private backend: BackendService,
  ) { }

  ngOnInit() {
    this.backend.updateStage();
    console.log(this.$stage);
  }

}
