import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontDev';
}

let items = [250, 645, 300, 900, 50];
let anotherNum = [350, 450, 850, 60]
let names = ["John", "Hulu", "Jane"]

for(let i=0; i < items.length; i++){
  let offer = items[i] / 10;
  items[i] -= offer;
  // console.log(items[i]);
}

console.log(items);
items.push(90);
console.log(items);
let poped = items.pop();
console.log("Items poped : ", poped, items);

// Add items before array
items.unshift(2000);
console.log(items);

// Delete items from start of array
items.shift();
console.log(items);

// Concat
console.log(items.concat(anotherNum));

