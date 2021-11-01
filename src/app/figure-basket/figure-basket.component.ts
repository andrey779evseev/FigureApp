import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {Detail, Figure} from '../app.component'
import {MatDialog} from '@angular/material/dialog'
import {MatSnackBar} from '@angular/material/snack-bar'
import {CreateFigureDialogComponent} from './create-figure-dialog/create-figure-dialog.component'

@Component({
  selector: 'app-figure-basket',
  templateUrl: './figure-basket.component.html',
})
export class FigureBasketComponent implements OnInit {

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {
  }

  isFigureDragging = false

  @Input() figures: Figure[]
  @Input() isDraggingOverTheTrashDelay: boolean
  @Input() isDraggingOverCreateDelay: boolean
  @Input() step: number
  @Input() selectedSteps: ('circle' | 'square' | 'triangle')[]
  @Output() changeStepEvent = new EventEmitter<number>()
  @Input() detail: Detail
  @Input() type: 'circle' | 'square' | 'triangle'

  changeStep(value: number) {
    this.changeStepEvent.emit(value)
  }


  ngOnInit(): void {
  }



  openSnackCreateError() {
    this._snackBar.open('Этот обьект не вписывается в уже существующий по размеру (необходимо создать новый с меньшими размерами)', undefined, {
      duration: 3000
    })
  }

  figureDragEnded() {
    this.isFigureDragging = false
    if (this.isDraggingOverTheTrashDelay)
      this.figures.shift()
    if (this.isDraggingOverCreateDelay) {
      if (this.step === 1 && this.type === this.selectedSteps[this.step - 1]) {
        this.detail.firstColor = this.figures[0].color
        this.detail.firstPart = this.figures[0].part
        this.figures.shift()
        this.changeStep(2)
      } else if (this.step === 2 && this.type === this.selectedSteps[this.step - 1]) {
        if (this.detail.firstPart > this.figures[0].part) {
          this.detail.secondColor = this.figures[0].color
          this.detail.secondPart = this.figures[0].part
          this.figures.shift()
          this.changeStep(3)
        } else {
          this.openSnackCreateError()
        }
      } else if (this.step === 3 && this.type === this.selectedSteps[this.step - 1]) {
        if (this.detail.secondPart > this.figures[0].part) {
          this.detail.thirdColor = this.figures[0].color
          this.detail.thirdPart = this.figures[0].part
          this.figures.shift()
          this.changeStep(4)
        } else {
          this.openSnackCreateError()
        }
      } else {
        this._snackBar.open('Неверная последовательность', undefined, {
          duration: 2000
        })
      }
    }
  }

  openCreateDialog() {
    this.dialog.open(CreateFigureDialogComponent, {
      height: '400px',
      width: '400px',
      data: {figures: this.figures, type: this.type}
    })
  }

}
