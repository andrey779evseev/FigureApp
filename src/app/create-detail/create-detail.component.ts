import {
  AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core'
import {Detail} from '../app.component'

@Component({
  selector: 'app-create-detail',
  templateUrl: './create-detail.component.html',
})
export class CreateDetailComponent implements OnInit, OnChanges, AfterViewInit {

  constructor() {
  }

  isDetailDragging = false

  @Input() createdDetails: Detail[]
  @Input() detail: Detail
  @Input() isDraggingOverTheTrashDelay: boolean
  @Input() isDraggingOverCreate: boolean
  @Input() isDraggingOverCreateDelay: boolean
  @Input() step: number
  @Input() selectedSteps: ('circle' | 'square' | 'triangle')[]
  @Output() changeStepEvent = new EventEmitter<number>()
  @Output() changeIsDraggingOverCreateEvent = new EventEmitter<boolean>()
  @Output() changeIsDraggingOverCreateDelayEvent = new EventEmitter<boolean>()

  @ViewChild('canvas')
  canvas: ElementRef<HTMLCanvasElement>

  public ctx: CanvasRenderingContext2D


  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d') as CanvasRenderingContext2D
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.step && this.step > 1) {
    console.log(this.detail)
      if (this.step === 2) {
        this.ctx.strokeStyle = this.detail.firstColor
        if (this.selectedSteps[this.step - 2] === 'square') {
          this.ctx.beginPath()
          this.ctx.rect((800 - this.detail.firstPart) / 2, 10, this.detail.firstPart, this.detail.firstPart)
          this.ctx.closePath()
        }
        if (this.selectedSteps[this.step - 2] === 'circle') {
          this.ctx.beginPath()
          this.ctx.arc(400, this.detail.firstPart/2 + 10, this.detail.firstPart/2, 0, 2 * Math.PI)
          this.ctx.closePath()
        }
        if (this.selectedSteps[this.step - 2] === 'triangle') {
          this.ctx.beginPath()
          this.ctx.moveTo(400 - this.detail.firstPart/2, this.detail.firstPart + 10)
          this.ctx.lineTo(400, 10)
          this.ctx.lineTo(400 + this.detail.firstPart/2, this.detail.firstPart + 10)
          this.ctx.closePath()
        }
      } else if (this.step === 3) {
        this.ctx.strokeStyle = this.detail.secondColor
        if (this.selectedSteps[this.step - 2] === 'square') {
          this.ctx.beginPath()
          this.ctx.rect((800 - this.detail.secondPart) / 2, 10, this.detail.secondPart, this.detail.secondPart)
          this.ctx.closePath()
        }
        if (this.selectedSteps[this.step - 2] === 'circle') {
          this.ctx.beginPath()
          this.ctx.arc(400, this.detail.secondPart/2+10, this.detail.secondPart/2, 0, 2 * Math.PI)
          this.ctx.closePath()
        }
        if (this.selectedSteps[this.step - 2] === 'triangle') {
          this.ctx.beginPath()
          this.ctx.moveTo(400 - this.detail.secondPart/2, this.detail.secondPart + 10)
          this.ctx.lineTo(400, 10)
          this.ctx.lineTo(400 + this.detail.secondPart/2, this.detail.secondPart + 10)
          this.ctx.closePath()
        }
      } else if (this.step === 4) {
        this.ctx.strokeStyle = this.detail.thirdColor
        if (this.selectedSteps[this.step - 2] === 'square') {
          this.ctx.beginPath()
          this.ctx.rect((800 - this.detail.thirdPart) / 2, 10, this.detail.thirdPart, this.detail.thirdPart)
          this.ctx.closePath()
        }
        if (this.selectedSteps[this.step - 2] === 'circle') {
          this.ctx.beginPath()
          this.ctx.arc(400, this.detail.thirdPart/2+10, this.detail.thirdPart/2, 0, 2 * Math.PI)
          this.ctx.closePath()
        }
        if (this.selectedSteps[this.step - 2] === 'triangle') {
          this.ctx.beginPath()
          this.ctx.moveTo(400 - this.detail.thirdPart/2, this.detail.thirdPart + 10)
          this.ctx.lineTo(400, 10)
          this.ctx.lineTo(400 + this.detail.thirdPart/2, this.detail.thirdPart + 10)
          this.ctx.closePath()
        }
      }
      this.ctx.stroke()
    }

  }


  changeStep(value: number) {
    this.changeStepEvent.emit(value)
  }

  changeIsDraggingOverCreate(value: boolean) {
    this.changeIsDraggingOverCreateEvent.emit(value)
  }

  changeIsDraggingOverCreateDelay(value: boolean) {
    this.changeIsDraggingOverCreateDelayEvent.emit(value)
  }

  clearDetail() {
    this.detail.firstPart = 0
    this.detail.secondPart = 0
    this.detail.thirdPart = 0
    this.detail.firstColor = ''
    this.detail.secondColor = ''
    this.detail.thirdColor = ''
  }

  createDetail() {
    this.createdDetails.unshift({
      firstPart: this.detail.firstPart,
      secondPart: this.detail.secondPart,
      thirdPart: this.detail.thirdPart,
      firstColor: this.detail.firstColor,
      secondColor: this.detail.secondColor,
      thirdColor: this.detail.thirdColor,
      path: this.selectedSteps
    })
    this.clearDetail()
    this.changeStep(1)
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)
  }

  detailDragEnded() {
    this.isDetailDragging = false
    if (this.isDraggingOverTheTrashDelay) {
      this.clearDetail()
      this.changeStep(1)
    }
  }

  dragToCreateLeave() {
    this.changeIsDraggingOverCreate(false)
    this.changeIsDraggingOverCreateDelay(true)
    setTimeout(() => this.changeIsDraggingOverCreateDelay(false), 1000)
  }


}
