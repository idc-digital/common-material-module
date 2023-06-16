import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-common-material',
  template: `
    <p>
      common-material is used for to avoid the imports of many material module and include all in one
    </p>
  `,
  styles: [
  ]
})
export class CommonMaterialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
