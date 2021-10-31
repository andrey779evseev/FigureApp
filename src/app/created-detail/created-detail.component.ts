import {Component, Input, OnInit} from '@angular/core'
import {Detail} from '../app.component'

@Component({
  selector: 'app-created-detail',
  templateUrl: './created-detail.component.html',
})
export class CreatedDetailComponent implements OnInit {

  constructor() { }

  isCreatedDetailDragging = false

  @Input() detail: Detail
  @Input() isDraggingOverTheTrash: boolean
  @Input() createdDetails: Detail[]
  @Input() i: number

  ngOnInit(): void {
  }


  createdDetailDragEnded(index: number) {
    this.isCreatedDetailDragging = false
    if(this.isDraggingOverTheTrash) {
      if (index > -1) {
        this.createdDetails.splice(index, 1);
      }
    }
  }

}
