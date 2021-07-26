import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { faEdit,faSave} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-edit-and-save-btn',
  templateUrl: './edit-and-save-btn.component.html',
  styleUrls: ['./edit-and-save-btn.component.css']
})
export class EditAndSaveBtnComponent implements OnInit {

  @Output() btnClick=new EventEmitter();
  faEdit=faEdit;
  faSave=faSave;
  isEditBtnClicked:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event:any){
    this.isEditBtnClicked=!this.isEditBtnClicked
    this.btnClick.emit(event);
  }
}
