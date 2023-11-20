import React, { useState } from 'react';
import texts from '../../../texts'
import styles from './StdPageNew.module.css'


export default function StdPage2() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const charWidth = 14;
  const inputWidth = Math.max(160, inputValue.length * charWidth) + "px";

  const inputStyle = {
    // border: `1px solid ${isFocused||hasInput ? 'rgb(32, 206, 232)' : 'rgb(32, 206, 232)'}`,
    // border: ${isFocused||hasInput?}
    width:inputWidth
  };
  return (
    <div className={styles.container}>
      <div className={styles.QContainer}>
        {texts.GeberalQ.StdPage.Page2.P2Q1}
      </div>
      <div className={styles.AcontainerBgImg}>
        {/* <div className={styles.BorderStyle}> */}
        <div className={styles.Acontainer} >
        "I am enthusiastic about pursuing my [
          <input 
            style={{width:'220px'}}
            className={styles.inputMustKeyWords} 
            placeholder='Bachelor, Master, Phd'
            onChange={handleChange}
            />
            ] degree at [
              <input 
            style={{width:'380px'}}
            className={styles.inputMustKeyWords}
            placeholder='the University Name under Application'
            onChange={handleChange}
            />]in Germany due to its distinguished reputation in[
              <input 
            style={{width:'340px'}}
            className={styles.inputMustKeyWords}
            placeholder='mention the relevant field of study'
            onChange={handleChange}
            />]. Additionally, the university's diverse and inclusive academic environment and its location in [
              <input 
            style={{width:'100px'}}
            className={styles.inputMustKeyWords}
            placeholder="City Name"
            onChange={handleChange}
            />] make it an ideal place for me to further my studies and research."
        {/* </div> */}
        </div>
      </div>
    </div>
  )
}
