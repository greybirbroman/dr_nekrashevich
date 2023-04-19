import Card from '../../Card/Card';
import { instrumentslist } from '../../../utils/const';

function Instruments() {
  return (
    <Card
      title='Оборудование'
      list={instrumentslist}
      flex={'flex items-baseline'}
    />
  );
}
export default Instruments;
