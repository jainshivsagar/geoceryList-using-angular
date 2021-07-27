import { Injectable } from '@angular/core';
import {Item} from '../Model/Item';
@Injectable({
  providedIn: 'root'
})
export class ItemCrudServiceService {

  items:Item[]=[];
  static counter:number=0;


  loadItemsFromLocalStorage(){
  
    if (typeof localStorage !== "undefined") {
      let x=localStorage.getItem("counter");

      ItemCrudServiceService.counter= x ? parseInt(""+x) : 0;

      this.items.length=0;//Empty The Array
      let itemIds = [];

      for (let p in localStorage) {
        if (!parseInt(p)) {
          //Escape The Strings
          continue;
        }
        itemIds.push(p);
      }
      itemIds.sort();
      itemIds.forEach((id) => {
        let temp = JSON.parse(localStorage[id]);
        let item:Item=new Item();
        item.id=temp._id;
        item.name=temp._name;
        item.units=temp._units;
        item.pricePerUnit=temp._pricePerUnit;

        this.items.push(item);
      });
    } else {
      alert(
        "Your browser don't support local storage."
      );
    }
  }
  readItems():Item[]{
    return this.items;
  }
  addItem(item:Item){

    ItemCrudServiceService.counter+=1;
    item.id=ItemCrudServiceService.counter;
    this.items.push(item)
    localStorage.setItem(""+item.id,JSON.stringify(item));
    localStorage.setItem("counter",""+item.id);
  }
  deleteItem(item:Item):Item[]{

    this.items=this.items.filter((element)=>element.id!==item.id);
    localStorage.removeItem(""+item.id);
    if(this.items.length<1){
      localStorage.setItem("counter","0");
    }
    return this.items;
  }
  updateItem(item:Item){
    this.items.forEach((element)=>{
      if(element.id!=item.id){
        return;
      }
      element.name=item.name;
      element.units=item.units;
      element.pricePerUnit=item.pricePerUnit;
    })
    localStorage.setItem(""+item.id,JSON.stringify(item));
  }
}
