import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contract} from '../../interfaces/all';

@Component({
  selector: 'app-contract-card',
  templateUrl: './contract-card.component.html',
  styleUrls: ['./contract-card.component.scss'],
})
export class ContractCardComponent implements OnInit {

  @Input() contract: Contract;

  @Output() contractClicked = new EventEmitter<{id: string}>();

  constructor() { }

  ngOnInit() {}

  openHealthContractDetail(contract: Contract) {
    this.contractClicked.emit({id: contract.id});
  }
}
