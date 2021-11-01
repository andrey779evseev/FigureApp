import {Component} from '@angular/core'


export interface Figure {
  part: number
  color: string
}

export interface Detail {
  sideSquare: number
  sideTriangle: number
  radius: number
  colorSquare: string
  colorTriangle: string
  colorCircle: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
  }

  circles: Figure[] = [{part: 99, color: 'red'}]
  triangles: Figure[] = [{part: 170, color: 'red'}]
  squares: Figure[] = [{part: 200, color: 'red'}]
  step = 1
  isDraggingOverTheTrash = false
  isDraggingOverCreate = false
  isDraggingOverTrashDelay = false
  isDraggingOverCreateDelay = false
  createdDetails: Detail[] = []
  detail: Detail = {colorTriangle: '', colorCircle: '', colorSquare: '', sideTriangle: 0, sideSquare: 0, radius: 0}

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
