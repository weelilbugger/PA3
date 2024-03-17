import { Component } from "@angular/core";
import { Item } from "./item";
@Component({
selector: "app-root",
templateUrl: "./app.component.html",
styleUrls: ["./app.component.css"],
})
export class AppComponent {
title = "todo";
filter: "all" | "active" | "done" = "all";
allItems = [
  { description: "Hello World", done: true },
 
  ];
  get items() {
  if (this.filter === "all") {
  return this.allItems;
  }
  return this.allItems.filter((item) =>
  this.filter === "done" ? item.done : !item.done
  );
  }
  addItem(description: string) {
    const existingItemIndex = this.allItems.findIndex(item => item.description != null);
    if (existingItemIndex !== -1) {
      // If item already exists, replace it
      this.allItems[existingItemIndex].description = description;
    } else {
      // If item doesn't exist, add it
      this.allItems.unshift({
        description,
        done: false
      });
    }
  }
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
    }
  }
