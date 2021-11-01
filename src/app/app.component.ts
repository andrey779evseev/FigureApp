import {Component} from '@angular/core'


export interface Figure {
  part: number
  color: string
}

export interface Detail {
  firstPart: number
  secondPart: number
  thirdPart: number
  firstColor: string
  secondColor: string
  thirdColor: string
  path: ('circle' | 'square' | 'triangle')[]
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
  }

  circles: Figure[] = [{part: 100, color: 'red'}]
  triangles: Figure[] = [{part: 150, color: 'red'}]
  squares: Figure[] = [{part: 200, color: 'red'}]
  step = 1
  isDraggingOverTheTrash = false
  isDraggingOverCreate = false
  isDraggingOverTrashDelay = false
  isDraggingOverCreateDelay = false
  selectedSteps: ('circle' | 'square' | 'triangle')[] = ['square', 'triangle', 'circle']
  createdDetails: Detail[] = []
  detail: Detail = {firstColor: '', firstPart: 0, secondColor: '', secondPart: 0, thirdColor: '', thirdPart: 0, path: []}

  changeStep(value: number) {
    this.step = value
  }


  changeIsDraggingOverCreate(value: boolean) {
    this.isDraggingOverCreate = value
  }

  changeIsDraggingOverCreateDelay(value: boolean) {
    this.isDraggingOverCreateDelay = value
  }

  dragToTrashLeave() {
    this.isDraggingOverTheTrash = false
    this.isDraggingOverTrashDelay = true
    setTimeout(() => this.isDraggingOverTrashDelay = false, 560)
  }
}
