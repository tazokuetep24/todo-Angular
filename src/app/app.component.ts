import { Component } from '@angular/core';
import { CommonModule} from "@angular/common";
import { Item } from "./item";
import { ItemComponent } from './item/item.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  componentTitle = 'My To Do List';

  filter: "all" | "active" | "done" = "all";

  allItems = [
{description: "Write Patrick a message", done: false},
{description: "Drink my morning coffee", done: false},
{description: "Schedule an Interview with Patrick", done: false},
{description: "Walk my dog Spooks", done: false},
{description: "Meet Patrick on coming Monday", done: false},
{description: "Employ Patrick as a Working Student :)", done: false},

  ];

  addItem(description: string){

    if(!description) return;
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item: Item){
    this.allItems.splice(this.allItems.indexOf(item),1);
  }


  get items(){
    if(this.filter === "all"){
      return this.allItems;
    }
    return this.allItems.filter((item) => 
      this.filter === "done" ? item.done : !item.done
  );
  }
}
