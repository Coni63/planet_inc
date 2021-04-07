import { Component, OnInit, Input } from '@angular/core';
import { BigNumber } from 'bignumber.js';
import { Cost } from 'src/app/classes/upgrade_costs';

@Component({
  selector: 'app-tooltip-cost',
  templateUrl: './tooltip-cost.component.html',
  styleUrls: ['./tooltip-cost.component.scss']
})
export class TooltipCostComponent implements OnInit {

  @Input() costs: { [key : string] : Cost };
  @Input() discoveredItems: Set<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
