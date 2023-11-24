import { useState } from 'react';
import { countAverageAge } from '../../utils/countAverageAge';
import './form.css';

const Form = () => {
  const [totalWomen, setTotalWomen] = useState(0);
  const [totalMen, setTotalMen] = useState(0);
  const [totalOther, setTotalOther] = useState(0);
  const [totalAgeMen, setTotalAgeMen] = useState(0);
  const [totalAgeWomen, setTotalAgeWomen] = useState(0);
  const [totalAgeOther, setTotalAgeOther] = useState(0);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(null);
  const [checkResult, setCheckResult] = useState(false);

  const onOptionChange = (e) => {
    setGender(e.target.value);
  };

  const handleAgeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setAge(value === '' ? null : parseInt(value, 10));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (gender === 'male') {
      setTotalMen((prev) => prev + 1);
      setTotalAgeMen((prev) => prev + age);
    }
    if (gender === 'female') {
      setTotalWomen((prev) => prev + 1);
      setTotalAgeWomen((prev) => prev + age);
    }
    if (gender === 'other') {
      setTotalOther((prev) => prev + 1);
      setTotalAgeOther((prev) => prev + age);
    }
    /* console.log(
      `ages added so far: Men: ${totalMen} with total age of ${totalAgeMen}, Women: ${totalWomen} with total age of ${totalAgeWomen}, Others: ${totalOther} with average age of ${totalAgeOther}`
    ); */
    setTimeout(() => {
      setGender('');
      setAge(null);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /*  console.log(
      ` Submitted or result: men: ${totalMen} with average age of ${totalAgeMen}, women: ${totalWomen} with average age of ${totalAgeWomen}, others: ${totalOther} with average age of ${totalAgeOther} `
    ); */
    setTimeout(() => {
      setCheckResult(true);
    }, 300);
  };

  const handleReset = () => {
    setTotalWomen(0);
    setTotalMen(0);
    setTotalOther(0);
    setTotalAgeMen(0);
    setTotalAgeWomen(0);
    setTotalAgeOther(0);
    setGender('');
    setAge(null);
    setTimeout(() => {
      setCheckResult(false);
    }, 300);
  };

  return (
    <div>
      {checkResult && (
        <section>
          <h2>Result:</h2>
          <ul>
            <li data-testid='listitem'>
              <h4>
                Total amount of Women: {totalWomen} - with an average age of{' '}
                {totalWomen === 0
                  ? '0'
                  : countAverageAge(totalWomen, totalAgeWomen)}
              </h4>
            </li>
            <li data-testid='listitem'>
              <h4>
                Total amount of Men: {totalMen} - with an average age of{' '}
                {totalMen === 0 ? '0' : countAverageAge(totalMen, totalAgeMen)}
              </h4>
            </li>
            <li data-testid='listitem'>
              <h4>
                Total amount of Other: {totalOther} - with an average age of{' '}
                {totalOther === 0
                  ? '0'
                  : countAverageAge(totalOther, totalAgeOther)}
              </h4>
            </li>
          </ul>
          <button type='reset' onClick={handleReset} className='btn'>
            <span>Reset</span>
          </button>
        </section>
      )}
      <form onSubmit={handleSubmit} onReset={handleReset} data-testid='form'>
        <h2>Select gender</h2>
        <div className='radio-wrapper'>
          <label htmlFor='male'>
            <input
              type='radio'
              value='male'
              id='male'
              name='gender'
              checked={gender === 'male'}
              onChange={onOptionChange}
            />
            male
          </label>

          <label htmlFor='female'>
            <input
              type='radio'
              id='female'
              value='female'
              name='gender'
              checked={gender === 'female'}
              onChange={onOptionChange}
            />
            female
          </label>

          <label htmlFor='other'>
            <input
              type='radio'
              id='other'
              value='other'
              name='gender'
              checked={gender === 'other'}
              onChange={onOptionChange}
            />
            other
          </label>
        </div>

        <div className='input-wrapper'>
          <h3>Enter Age</h3>
          <input
            type='number'
            value={age === null ? '' : age}
            name='age'
            onChange={handleAgeChange}
            placeholder='Enter your age'
          />
        </div>

        <p style={{ color: 'pink' }}>Your information -</p>
        <p>
          {' '}
          Gender: {gender} & age: {age ? age : ''}
        </p>
        <p>Add to survey</p>
        <button onClick={handleAdd}>Add +</button>
        <p>Check result of average ages of genders</p>
        {!checkResult ? (
          <button type='submit'>Submit</button>
        ) : (
          <button type='reset'>Reset</button>
        )}
      </form>
    </div>
  );
};

export default Form;
