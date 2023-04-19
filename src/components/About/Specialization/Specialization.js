import Card from '../../Card/Card'
import { specializationList } from '../../../utils/const';


function Specialization() {
  return (
    <Card 
    title='Специализация'
    list={specializationList}
    flex={'flex items-baseline'}
    />
  );
}
export default Specialization;
