import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  today = new Date();
  stuff: Array<Object> = [];
  pattern: string;
  constructor() { }

  ngOnInit() {
  }
  addItem(item) {
      this.stuff.push({name: item});
    }
}
