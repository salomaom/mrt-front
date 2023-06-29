import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { HotkeyInput } from 'src/app/components/hotkeys/hotkeys.component';

import Filter from '../../models/filter';
import { SelectOption } from 'src/app/components/form/select/select.component';
import TollCompany from '../../models/toll-company';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'mrt-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css'],
  animations: [
    trigger('advancedFilterAnimation', [
      state('open', style({ height: '*', overflow: 'hidden' })),
      state('closed', style({ height: '0', overflow: 'hidden' })),
      transition('open <=> closed', [animate('0.2s')]),
    ]),
    trigger('moreFilterAnimation', [
      state('open', style({ height: '*', overflow: 'hidden' })),
      state('closed', style({ height: '0', overflow: 'hidden' })),
      transition('open <=> closed', [animate('0.2s')]),
    ]),
  ],
})
export class FilterBarComponent implements OnChanges, OnInit {
  animationState: 'open' | 'closed' = 'closed';
  moreFilterAnimationState: 'open' | 'closed' = 'closed';
  selectedValue = '';
  tollCompanies: SelectOption[] = [];
  plazas: SelectOption[] = [];
  anomalyTypes: SelectOption[] = [];
  laneModes: SelectOption[] = [];
  vehicleClasses: SelectOption[] = [];
  paymentTypes: SelectOption[] = [];
  laneDirections: SelectOption[] = [];
  lanes: SelectOption[] = [];
  selectedTollCompany: TollCompany | undefined;
  hotkeys: HotkeyInput[] = [];
  form!: FormGroup;

  @Input() filters?: Filter;

  @Output() filterClick = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    this.initFilters();
    if (this.filters) {
      this.form.patchValue({
        fromDateTime: this.filters.fromDateTime,
        toDateTime: this.filters.toDateTime,
      });
    }
  }

  ngOnInit() {
    this.createForm();
    this.initHotkeys();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      fromDateTime: [null],
      toDateTime: [null],
      tollCompanies: [[]],
      plazas: [[]],
      anomalyTypes: [[]],
      laneModes: [[]],
      vehicleClasses: [[]],
      paymentTypes: [[]],
      laneDirections: [[]],
      lanes: [[]],
      transactionIds: [[]],
      operatorId: [''],
    });
  }

  initHotkeys() {
    this.hotkeys.push(
      {
        key: 'meta + f',
        command: (e) => this.openFilters(),
      },
      {
        key: 'meta + g',
        command: (e) => this.openMoreFilters(),
      }
    );
  }

  initFilters() {
    if (this.filters) {
      this.filters.fromDateTime = new Date(this.filters.fromDateTime);
      this.filters.toDateTime = new Date(this.filters.toDateTime);
      this.tollCompanies = this.filters.tollCompanies.map((tc) => {
        const tollCompany: SelectOption = {
          value: tc.code,
          text: `${tc.code} - ${tc.name}`,
        };
        return tollCompany;
      });

      this.anomalyTypes = this.filters.anomalyTypes.map((tc) => {
        const anomalyType: SelectOption = {
          value: tc.code,
          text: `${tc.code} - ${tc.description}`,
        };
        return anomalyType;
      });

      this.laneModes = this.filters.laneModes.map((tc) => {
        const laneMode: SelectOption = {
          value: tc.code,
          text: `${tc.code} - ${tc.description}`,
        };
        return laneMode;
      });

      this.paymentTypes = this.filters.paymentTypes.map((tc) => {
        const paymentType: SelectOption = {
          value: tc.code,
          text: `${tc.code} - ${tc.description}`,
        };
        return paymentType;
      });

      this.laneDirections = this.filters.laneDirections.map((tc) => {
        const laneDirection: SelectOption = {
          value: tc.code,
          text: `${tc.code} - ${tc.description}`,
        };
        return laneDirection;
      });
    }
  }

  onTollCompanySelection(tollCompanyCode: string | string[]) {
    this.selectedTollCompany = this.filters?.tollCompanies.filter(
      (tc) => tc.code === tollCompanyCode
    )[0];

    if (this.selectedTollCompany) {
      this.plazas = this.selectedTollCompany.plazas.map((tc) => {
        const tollCompany: SelectOption = {
          value: tc.code,
          text: `${tc.code} - ${tc.name}`,
        };
        return tollCompany;
      });

      this.vehicleClasses = this.selectedTollCompany.vehicleClasses.map(
        (tc) => {
          const vehicleClass: SelectOption = {
            value: tc.class,
            text: `${tc.class} - ${tc.description}`,
          };
          return vehicleClass;
        }
      );
    }
  }

  onPlazaSelection(plazaCodes: string | string[]) {
    if (plazaCodes.length !== 1) {
      this.lanes = [{ text: 'Todas', value: 'all' }];
    } else {
      const selectedPlaza = this.selectedTollCompany?.plazas.find(
        (p) => p.code === plazaCodes[0]
      );

      if (selectedPlaza && selectedPlaza.lanes) {
        this.lanes = selectedPlaza.lanes.map((l) => {
          const lane: SelectOption = {
            text: l.number,
            value: l.number,
          };
          return lane;
        });
      }
    }
  }

  openFilters(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.animationState = this.animationState === 'closed' ? 'open' : 'closed';
    this.moreFilterAnimationState = 'closed';
  }

  openMoreFilters(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.moreFilterAnimationState =
      this.moreFilterAnimationState === 'closed' ? 'open' : 'closed';
  }

  onFilter() {
    this.filterClick.emit(this.selectedValue);
    this.openFilters();
  }
}
