
import { InputConteiner } from './styles';

const Input = ({value}) => {
    return (
      <InputConteiner>
        <input disabled value={value}/>
      </InputConteiner>
    );
  }
  
  export default Input;