import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
})
export class CircleComponent implements OnInit {

  constructor() { }

  @Input() part: number
  @Input() color: string

  ngOnInit(): void {
  }

}
