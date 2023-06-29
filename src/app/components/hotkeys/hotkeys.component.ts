import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AllowIn, ShortcutInput } from 'ng-keyboard-shortcuts';

export type HotkeyInput = ShortcutInput;
export type AllowedIn = AllowIn;

@Component({
  selector: 'mrt-hotkeys',
  templateUrl: './hotkeys.component.html',
  styleUrls: ['./hotkeys.component.css'],
})
export class HotkeysComponent implements OnChanges {
  @Input() hotkeys: HotkeyInput[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.hotkeys = changes['hotkeys']['currentValue'].map(
      (hotkey: HotkeyInput) => {
        return {
          ...hotkey,
          preventDefault: true,
          allowIn: [
            AllowIn.ContentEditable,
            AllowIn.Input,
            AllowIn.Select,
            AllowIn.Textarea,
          ],
        };
      }
    );
  }
}
