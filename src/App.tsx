import React, { useRef, useState } from 'react';
import FrequencyInput from './components/Frequency/FrequencyInput';
import NumberInput from './components/Numbers/NumberInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isFibonacci, getValueFromInput } from './utils';
import { Button, Container, Row } from 'react-bootstrap';

function App() {
  const [frequency, setFrequency] = useState(0);
  const [buttonfrequencyDisabled, setButtonFrequencyDisabled] = useState(false);
  const [numbersArray, setNumbersArray] = useState([] as Array<number>);
  const [FIB, setFIB] = useState('');
  const occurances = useRef(0);

  const showOccurances = () => {
    const count = Object();
    for (const number of numbersArray) {
      if (count[number]) {
        count[number] += 1;
      } else {
        count[number] = 1;
      }
    }
    return count;
  };

  const displayOccurancesInInterval = (frequencyMilliseconds: number) => {
    occurances.current = window.setInterval(() => {
      let occurancesobj = showOccurances();
      alert(JSON.stringify(occurancesobj));
    }, frequencyMilliseconds);
  };

  const handleFrequency = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = getValueFromInput(e);
    const numberValue = Number(inputValue);
    if (!isNaN(numberValue) && numberValue !== 0) {
      setFrequency(numberValue);
      setButtonFrequencyDisabled(true);
      const frequencyMilliseconds = numberValue * 1000;
      displayOccurancesInInterval(frequencyMilliseconds);
    }
  };

  const handleNumbers = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = getValueFromInput(e);
    const numberValue = Number(inputValue);
    if (!isNaN(numberValue)) {
      isFibonacci(numberValue) ? setFIB('FIB') : setFIB('');
      numbersArray.push(Number(inputValue));
      setNumbersArray(numbersArray);
    }
  };

  const handleQuit = () => {
    clearInterval(occurances.current);
    setFrequency(0);
    setButtonFrequencyDisabled(false);
    setNumbersArray([]);
    setFIB('');
  };
  
  return (
    <div className="App">
      <Container className="mt-2">
        <FrequencyInput onSubmit={handleFrequency} disabled={buttonfrequencyDisabled} />
      </Container>
      {frequency > 0 &&
        <Container className="mt-2">
          <NumberInput onSubmit={handleNumbers} firstElement={numbersArray.length} FIB={FIB} />
          <Row className="justify-content-center">
            <Button type="button" style={{ maxWidth: '100px' }} className="m-2" onClick={() => clearInterval(occurances.current)}>Halt</Button>
            <Button type="button" style={{ maxWidth: '100px' }} className="m-2" onClick={() => displayOccurancesInInterval(frequency * 1000)}>Resume</Button>
            <Button type="button" style={{ maxWidth: '100px' }} className="m-2" onClick={handleQuit}>Quit</Button>
          </Row>
        </Container>
      }

    </div>
  );
}

export default App;