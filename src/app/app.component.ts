import { Component ,Input,OnInit,ViewChild} from '@angular/core';
import { TableComponent } from './components/table/table.component';
import { Item } from './Model/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],  
})
export class AppComponent implements OnInit{
  title = 'Grocery List';

  @ViewChild(TableComponent) tableComponent : TableComponent;
  
  constructor(){
  }
  ngOnInit():void{
  }
  addItem(data:Item){
    let newItem:Item=new Item();
    newItem.name=data.name;
    newItem.units=data.units;
    newItem.pricePerUnit=data.pricePerUnit;

    this.tableComponent.addItem(data);
  }
}
