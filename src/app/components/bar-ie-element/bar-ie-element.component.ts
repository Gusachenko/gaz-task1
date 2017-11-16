import { Component, AfterViewInit, OnInit, Input } from '@angular/core';

import { Indicator } from '../../classes/indicator';

@Component({
  selector: 'app-bar-ie-element',
  templateUrl: './bar-ie-element.component.html',
  styleUrls: ['./bar-ie-element.component.scss']
})
export class BarIeElementComponent implements AfterViewInit, OnInit {

  @Input() id: string;
  @Input() levelIndicator: Indicator;
  @Input() weightIndicator: Indicator;

  isAttentionLevelValue: boolean;
  levelPrecentageValue: number;

  constructor() {
    this.isAttentionLevelValue = false;
    this.levelPrecentageValue = 0;
  }

  ngOnInit() {
    this.isAttentionLevelValue = this.checkAttentionLevelValue(this.levelIndicator.value);
    this.weightIndicator.value = this.convertNumberToValidPresentation(this.weightIndicator.value);
    this.levelPrecentageValue = (this.levelIndicator.value / 100) * 400;
  }

  ngAfterViewInit() { }

  private convertNumberToValidPresentation(number: any): number {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  private checkAttentionLevelValue(value: number): boolean {
    let condition;
    if (this.levelIndicator.value > this.levelIndicator.maxValue || this.levelIndicator.value < this.levelIndicator.minValue) {
      condition = true;
    } else {
      condition = false;
    }
    return condition;
  }

}
