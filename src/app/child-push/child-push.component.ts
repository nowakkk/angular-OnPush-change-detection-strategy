import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child-push',
  template: `
    <section class="component-container">
      <h3>Here change detection is onPush</h3>
      <h4>inputed object value: {{ inputObject | json }}</h4>
    </section>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildPushComponent implements OnInit {

  @Input() inputObject: any;

  constructor() { }

  ngOnInit(): void {
  }

}
