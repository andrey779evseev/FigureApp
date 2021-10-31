import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {Detail} from '../app.component'

@Component({
  selector: 'app-create-detail',
  templateUrl: './create-detail.component.html',
})
export class CreateDetailComponent implements OnInit {

  constructor() { }

  isDetailDragging = false

  @Input() createdDetails: Detail[]
  @Input() detail: Detail
  @Input() isDraggingOverTheTrash: boolean
  @Input() isDraggingOverCreate: boolean
  @Input() step: number
  @Output() changeStepEvent = new EventEmitter<number>()
  @Output() changeIsDraggingOverCreateEvent = new EventEmitter<boolean>()


  changeStep(value: number) {
    this.changeStepEvent.emit(value)
  }

  changeIsDraggingOverCreate(value: boolean) {
    this.changeIsDraggingOverCreateEvent.emit(value)
  }

  clearDetail() {
    this.detail.radius = 0
    this.detail.sideSquare = 0
    this.detail.sideTriangle = 0
    this.detail.colorTriangle = ''
    this.detail.colorCircle = ''
    this.detail.colorSquare = ''
  }

  createDetail() {
    this.createdDetails.unshift({
      radius: this.detail.radius,
      colorSquare: this.detail.colorSquare,
      colorTriangle: this.detail.colorTriangle,
      colorCircle: this.detail.colorCircle,
      sideSquare: this.detail.sideSquare,
      sideTriangle: this.detail.sideTriangle,
    })
    this.clearDetail()
    this.changeStep(1)
  }

  detailDragEnded() {
    this.isDetailDragging = false
    if(this.isDraggingOverTheTrash)
    {
      this.clearDetail()
      this.changeStep(1)
    }
  }

  dragToCreateLeave() {
    setTimeout(() => this.changeIsDraggingOverCreate(false), 1000)
  }

  ngOnInit(): void {
  }

}
