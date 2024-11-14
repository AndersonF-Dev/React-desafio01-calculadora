import Input from './components/Input';
import Button from './components/Button';

import { Container, Conteudo, Linha } from "./styles";
import { useState } from 'react';

const App = () => {
  const [numeroAtual, setNumeroAtual] = useState('0');
  const [primeiroNumero, setPrimeiroNumero] = useState('0');
  const [operacao, setOperacao] = useState('');

  const limpar = () => {
    setNumeroAtual('0');
    setPrimeiroNumero('0');
    setOperacao('');
  };

  const adicionarNumero = (num) => {
    setNumeroAtual((prev) => `${prev === '0' ? '' : prev}${num}`);
  };

  const definirOperacao = (op) => {
    if (primeiroNumero === '0') {
      setPrimeiroNumero(numeroAtual);
      setNumeroAtual('0');
      setOperacao(op);
    } else {
      calcularResultado();
      setOperacao(op);
    }
  };

  const calcularResultado = () => {
    if (operacao && primeiroNumero !== '0') {
      const numero1 = parseFloat(primeiroNumero);
      const numero2 = parseFloat(numeroAtual);
      let resultado = 0;

      switch (operacao) {
        case '+':
          resultado = numero1 + numero2;
          break;
        case '-':
          resultado = numero1 - numero2;
          break;
        case 'x':
          resultado = numero1 * numero2;
          break;
        case '/':
          resultado = numero2 !== 0 ? numero1 / numero2 : 'Erro';
          break;
        default:
          break;
      }

      setNumeroAtual(String(resultado));
      setPrimeiroNumero('0');
      setOperacao('');
    }
  };

  return (
    <Container>
      <Conteudo>
        <Input value={numeroAtual} />
        <Linha>
          <Button label="C" onClick={limpar} />
          <Button label="÷" onClick={() => definirOperacao('/')} />
          <Button label="x" onClick={() => definirOperacao('x')} />
          <Button label="-" onClick={() => definirOperacao('-')} />
        </Linha>
        <Linha>
          <Button label="7" onClick={() => adicionarNumero('7')} />
          <Button label="8" onClick={() => adicionarNumero('8')} />
          <Button label="9" onClick={() => adicionarNumero('9')} />
          <Button label="+" onClick={() => definirOperacao('+')} />
        </Linha>
        <Linha>
          <Button label="4" onClick={() => adicionarNumero('4')} />
          <Button label="5" onClick={() => adicionarNumero('5')} />
          <Button label="6" onClick={() => adicionarNumero('6')} />
          <Button label="=" onClick={calcularResultado} />
        </Linha>
        <Linha>
          <Button label="1" onClick={() => adicionarNumero('1')} />
          <Button label="2" onClick={() => adicionarNumero('2')} />
          <Button label="3" onClick={() => adicionarNumero('3')} />
          <Button label="0" onClick={() => adicionarNumero('0')} />
        </Linha>
      </Conteudo>
    </Container>
  );
};

export default App;

