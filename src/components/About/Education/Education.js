import Card from '../../Card/Card';
import { educationlist } from '../../../utils/const';


function Education() {
  return (
      <Card 
      title='Образование'
      list={educationlist}
      flex={'flex flex-col gap-3'}
      />
  );
}
export default Education;
