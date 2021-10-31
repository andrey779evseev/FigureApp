import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
})
export class TriangleComponent implements OnInit {

  constructor() { }

  @Input() part: number
  @Input() color: string

  ngOnInit(): void {
  }

}
