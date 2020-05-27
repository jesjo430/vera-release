import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,} from '@angular/core';
import {Priority} from '../../../models/Priority';
import {PriorityText} from '../../../models/PriorityText';

@Component({
  selector: 'app-visit-info-personal',
  templateUrl: './visit-info-personal.component.html',
  styleUrls: ['./visit-info-personal.component.css']
})
export class VisitInfoPersonalComponent implements OnInit, OnChanges {
  // TODO use user model
  @Input() priority = 0;
  @Input() firstName = 'firstName';
  @Input() lastName = 'lastName';
  @Input() socialId = 199801010101;
  @Input() age = 0;
  @Input() gender = 'Man';
  // @Input() attention: AttentionData;

  @Output() prioChange: EventEmitter<number> = new EventEmitter();
  priorityColor = '';
  priorityText = '';

  constructor() {
  }

  ngOnInit(): void {
    this.priorityColor = Priority[this.priority];
    this.priorityText = PriorityText[this.priority];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.priorityColor = Priority[changes.priority.currentValue];
    this.priorityText = PriorityText[changes.priority.currentValue];
  }

}
