import TollCompany from './toll-company';
import AnomalyType from './anomaly-type';
import LaneMode from './lane-mode';
import PaymentType from './payment-type';
import LaneDirection from './lane-direction';

type Filter = {
  fromDateTime: Date;
  toDateTime: Date;
  tollCompanies: TollCompany[];
  anomalyTypes: AnomalyType[];
  laneModes: LaneMode[];
  paymentTypes: PaymentType[];
  laneDirections: LaneDirection[];
};

export default Filter;
