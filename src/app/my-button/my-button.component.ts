import { Component, OnInit , EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {
  @Input() label!: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
