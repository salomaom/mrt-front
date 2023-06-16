import { Component, EventEmitter, Input, Output } from '@angular/core';

export type SelectOption = {
  value: string;
  text: string;
};

@Component({
  selector: 'mrt-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent {
  @Input() label: string = '[SEM LABEL]';
  @Input() selected: string = 'all';
  @Input() options: SelectOption[] = [];
  @Input() multiple: boolean = false;
  selectedOptions: string[] = [];

  @Output() selectedValue = new EventEmitter<string | string[]>();

  valueSelected(value: string | string[]) {
    console.log('valueSelected - > 1 <', value, this.selectedOptions);

    if (
      Array.isArray(value) &&
      value[0] === this.selected &&
      value.length !== this.options.length + 1
    ) {
      // let selectedValue = [...value];
      value.shift();
      this.selectedOptions = value.filter((v) => v !== this.selected);
      console.log('valueSelected - > 2 <', value, this.selectedOptions);
      this.selectedValue.emit(value);
      return;
    } else if (Array.isArray(value) && value[0] === this.selected) {
      let selectedValue = [...value];
      selectedValue.shift();
      this.selectedValue.emit(selectedValue);
      return;
    }
    this.selectedValue.emit(value);
  }

  toggleSelectAll() {
    if (this.isAllSelected()) {
      this.selectedOptions = [];
    } else {
      this.selectedOptions = [
        this.selected,
        ...this.options.map((option) => option.value),
      ];
    }

    let selectedOptionsClone = [...this.selectedOptions];
    selectedOptionsClone.shift();
    this.selectedValue.emit(selectedOptionsClone);
  }

  isAllSelected(): boolean {
    return this.selectedOptions.length === this.options.length;
  }
}
