import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <section class="parent-component-container">
      <h1>Change Detection OnPush Strategy</h1>
      <h3>Parent object: {{ exampleObject | json }}</h3>
      <div class="buttons-container">
        <button (click)="changeOriginalObject()" class="change-variable-button">Change object in parent</button>
        <button (click)="reassignOriginalObject()" class="change-variable-button reassign">Reassign object in parent</button>
      </div>
      <h4>Both below components receive object via @Input() property decorator</h4>
      <div class="child-components-container">
        <app-child [inputObject]="exampleObject" class="child" ></app-child>
        <app-child-push [inputObject]="exampleObject" class="child"></app-child-push>
      </div>
      <p>Above simple example shows how OnPush changeDetectionStrategy limits data passage between the components</p>
      <p>Mutating object - using first button doesn't trigger changes on component with OnPush detection strategy.</p>
      <p>OnPush strategy is only re-rendering the component when reassignment of passed object occurs - second button</p>
      <p>It is related to object reference. Mutating object doesn't change its referenece in memory, reassigning does</p>
    </section>
  `,
  styleUrls: [
    "./parent.component.css"
  ]
})
export class ParentComponent implements OnInit {

  exampleObject: any = {
    name: "John",
    surname: "Smith"
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeOriginalObject() {
    this.exampleObject.name += "changed"
  }

  reassignOriginalObject() {
    let name = this.exampleObject.name;
    let surname = this.exampleObject.surname;
    this.exampleObject = { name: name + "changed", surname: surname }
  }

}
