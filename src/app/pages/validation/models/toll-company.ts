import Plaza from './plaza';
import VehicleClass from './vehicle-class';

interface TollCompany {
  code: string;
  name: string;
  shortName?: string;
  plazas: Plaza[];
  vehicleClasses: VehicleClass[];
}

export default TollCompany;
