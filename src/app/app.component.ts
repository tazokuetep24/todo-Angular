import { Component } from '@angular/core';
import { CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  componentTitle = 'My To Do List';

  filter: "all" | "active" | "done" = "all";

  allItems = [
{description: "eat", done: true},
{description: "sleep", done: false},
{description: "play", done: false},
{description: "laugh", done: false},

  ];

  addItem(description: string){

    if(!description) return;
    this.allItems.unshift({
      description,
      done: false
    });
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
