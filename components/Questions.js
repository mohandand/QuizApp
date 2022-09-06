import React, { useState } from 'react';
import { data } from '../data.js';

export default function Question() {
  let question = data.questions;
  let allQues = question.map((item, index) => {
    return (
      <div>
        {item.descrition}
        {item.options.map(() => {
          return <div></div>;
        })}
      </div>
    );
  });
  return <div>{allQues}</div>;
}
