import {Component, Inject, OnInit} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import {Figure} from '../../app.component'

export interface DialogDataType {
  figures: Figure[]
  type: 'circle' | 'square' | 'triangle'
}


@Component({
  selector: 'app-create-figure-dialog',
  templateUrl: './create-figure-dialog.component.html',
})
export class CreateFigureDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateFigureDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataType) {
  }


  part: number = this.data.type === 'square' ? 200 : this.data.type === 'triangle' ? 170 : 99
  color = 'red'



  close(): void {
    this.dialogRef.close()
  }

  create(): void {
    if(this.data.type === 'circle')
      this.part *= 2
    this.data.figures.push({part: this.part, color: this.color})
    this.dialogRef.close()
  }

  ngOnInit(): void {
  }

}
