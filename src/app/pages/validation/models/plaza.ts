import Lane from './lane';

interface Plaza {
  code: string;
  tollCompanyCode: string;
  name: string;
  node: string;
  laneNode: string;
  road?: string;
  km?: string;
  lanes: Lane[];
}

export default Plaza;
