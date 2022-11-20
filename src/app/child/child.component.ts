import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <section class="component-container">
      <h3>Here change detection is default</h3>
      <h4>inputed object value: {{ inputObject | json }}</h4>
    </section>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  @Input() inputObject: any;

  constructor() { }

  ngOnInit(): void {
  }

}
