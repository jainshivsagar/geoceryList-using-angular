import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Item } from 'src/app/Model/Item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
@Output() onSubmitEvent=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitA(data:Item){
    this.onSubmitEvent.emit(data);
  }
}
