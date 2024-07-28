import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-benefits',
  templateUrl: './select-benefits.component.html',
  styleUrls: ['./select-benefits.component.scss']
})
export class SelectBenefitsComponent implements OnInit {
  benefits = [
    { icon: '../../../assets/images/icon-block.png', text: 'cartões sem anuidade' },
    { icon: '../../../assets/images/icon-buying', text: 'cartões de supermercados' },
    { icon: '../../../assets/images/icon-airplane', text: 'cartões de milhas e viagens' },
    { icon: '../../../assets/images/icon-buying.png', text: 'cartões de games' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
