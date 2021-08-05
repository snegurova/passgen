import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const isGenerated = true;
  
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
          <select className={styles.mr15} name="passwordLength" id="passwordLength">
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
  
          <input type="checkbox" name="withNumbers" id="withNumbers"/>
          <label className={styles.mr15} htmlFor="withNumbers">Include numbers</label>
          <button>Generate password</button>
        </div>
        <div style={ isGenerated ? { display:'block'} : {display : 'none'} }>
          <input type="text" readOnly value="pass"/>
          <button>Copy</button>
        </div>
      </main>

    </div>
  )
}
