import { Component ,Input,OnInit} from '@angular/core';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { Item } from './Model/Item';
import{ItemCrudServiceService} from './services/item-crud-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Grocery List';
  items:Item[];
  grandTotal:number=0;
  private itemCrudServices:ItemCrudServiceService=new ItemCrudServiceService();
  
  faTrashAlt=faTrashAlt;


  constructor(){
    this.items=[];
  }
  ngOnInit():void{
    this.itemCrudServices.loadItemsFromLocalStorage();

    this.items=this.itemCrudServices.readItems();

    this.items.forEach((element:Item)=>{
      this.grandTotal+=element.getTotal;
    })
  }
  addItem(data:Item){
    let newItem:Item=new Item();
    newItem.name=data.name;
    newItem.units=data.units;
    newItem.pricePerUnit=data.pricePerUnit;
    
    this.grandTotal+=newItem.getTotal;

    this.itemCrudServices.addItem(newItem);
  }

  editItem(event:any){

    let btn=event.currentTarget;
    let tr=btn.parentElement.parentElement.parentElement;
    let itemNameTD=tr.childNodes[0];
    let itemUnitsTD=tr.childNodes[1];
    let itemPriceTD=tr.childNodes[2];
    let itemTotalTD=tr.childNodes[3];
    let itemIdTD=tr.childNodes[6];

    if(btn.classList.contains("editIcon")){
      
      itemNameTD.contentEditable=true;
      itemUnitsTD.contentEditable=true;
      itemPriceTD.contentEditable=true;
    }else{
      itemNameTD.contentEditable=false;
      itemUnitsTD.contentEditable=false;
      itemPriceTD.contentEditable=false;

      let item:Item=new Item();

      item.name=itemNameTD.textContent;
      item.units=parseInt(itemUnitsTD.textContent);
      item.pricePerUnit=parseInt(itemPriceTD.textContent)

      item.id=parseInt(itemIdTD.textContent);

      let diff=parseInt(itemTotalTD.textContent)-item.getTotal;
      this.grandTotal-=diff;
      this.itemCrudServices.updateItem(item)
    }
    
  }
  deleteItem(event:any){
    let tr=event.currentTarget.parentElement.parentElement;
    let itemId=parseInt(tr.childNodes[6].textContent);

    let item=this.items.find((element)=>{
      return element.id===itemId;
    });
    
    if(item){
      this.items=this.itemCrudServices.deleteItem(item);
      this.grandTotal-=item.getTotal;
      
    }else{
      alert("Item Dose Not Exist")
    }
  }
}
