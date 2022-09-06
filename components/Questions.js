import React, { useState } from 'react';
import { data } from '../data.js';

export default function Question() {
  let question = data.questions;
  let allQues = question.map((item, index) => {
    return (
      <div>
        <div>
          {item.descrition}
          <br />
        </div>
        {item.options.map((option, index) => {
          return (
            <div>
              <input type="radio" name={index} />
              {option.description}
            </div>
          );
        })}
      </div>
    );
  });
  return <div>{allQues}</div>;
}
