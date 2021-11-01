import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
})
export class InstructionsComponent implements OnInit {

  constructor() { }


  @Input() step: number
  @Input() selectedSteps: ('circle' | 'square' | 'triangle')[]

  ngOnInit(): void {
  }

}
