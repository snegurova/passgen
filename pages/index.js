import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import generator from  'generate-password';

export default function Home() {
  
  const [isGenerated, setIsGenerated] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const minLength = 6;
  const maxLength = 12;
  const [passwordLength, setPasswordLength] = useState(minLength);
  
  const handleGeneratePassword = () => {
    const password = generator.generate({
      length: passwordLength,
      numbers: includeNumbers
    });
    setIsGenerated(true);
    setPasswordValue(password);
  }
  
  const handlePasswordLength = ({target}) => {
    setPasswordLength(target.value);
  }
  
  const handleIncludeNumbers = ({target}) => {
    setIncludeNumbers(target.checked);
  }
  
  const lengthOptions = [];
  for (let i = minLength; i <= maxLength; i++) {
    lengthOptions.push(<option value={i} key={i}>{i}</option>);
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Password Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Password Generator
        </h1>
        <div className={styles.controls}>
          <select
            className={styles.mr15}
            name="passwordLength"
            id="passwordLength"
            onChange={handlePasswordLength}
          >
            {lengthOptions}
          </select>
  
          <input type="checkbox" name="withNumbers" id="withNumbers" onChange={handleIncludeNumbers}/>
          <label className={styles.mr15} htmlFor="withNumbers">Include numbers</label>
          <button onClick={handleGeneratePassword}>Generate password</button>
        </div>
        <div style={ isGenerated ? { display:'block'} : {display : 'none'} }>
          <input type="text" readOnly value={passwordValue}/>
          <button>Copy</button>
        </div>
      </main>

    </div>
  )
}
