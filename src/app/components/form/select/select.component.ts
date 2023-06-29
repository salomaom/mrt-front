import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR,  } from '@angular/forms';

export type SelectOption = {
  value: string;
  text: string;
};

@Component({
  selector: 'mrt-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() selected: string = 'all';
  @Input() options: SelectOption[] = [];
  @Input() multiple: boolean = false;
  @Input() disabled: boolean = false;
  selectedOptions: string[] = [];
  onChange: any;
  onTouched: any;

  @Output() selectedValue = new EventEmitter<string | string[]>();

  writeValue(value: any): void {
    if (value !== undefined) {
      this.selectedOptions = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  valueSelected(value: string | string[]) {
    if (
      Array.isArray(value) &&
      value[0] === this.selected &&
      value.length !== this.options.length + 1
    ) {
      value.shift();
      this.selectedOptions = value.filter((v) => v !== this.selected);
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
