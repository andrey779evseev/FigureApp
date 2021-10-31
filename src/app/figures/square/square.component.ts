import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
})
export class SquareComponent implements OnInit {

  constructor() { }

  @Input() part: number
  @Input() color: string

  ngOnInit(): void {
  }

}
