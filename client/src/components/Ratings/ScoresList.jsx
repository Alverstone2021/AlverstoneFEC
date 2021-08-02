import React from 'react';
import ScoreBarItem from './ScoreBarItem.jsx';
import ComfortSizeBar from './ComfortSizeBar.jsx';

const ScoresList = (props) => {
  return (
    <div className='review-grid-item2'>
      <div className='flex-rating-header'>
        <h1>{props.average}</h1>
        <p>Stars Component here!!</p>
      </div>
      <p>{props.recommend}% recommend this product</p>
      {props.starsArray.map((rating, i) => {
        return <ScoreBarItem key={i} starLabel={rating.value} starCount={rating.count} starScore={rating.score} />
      })}
      <div className='comfort-bar-parent'>
        {createCharBars(props.characteristics).map((bar, i) => {
          return (
            <ComfortSizeBar id={'reviewbar' + i} key={i} title={bar.title} label1={bar.label1} label2={bar.label2} label3={bar.label3} value={bar.value} />
          );
        })}
      </div>
    </div>
  );
};

// helper functions
const createCharBars = (charObject) => {
  if (charObject) {
    var charArray = [];
    for (var key in charObject) {
      var barObj = {};
      barObj.title = key;
      barObj.value = parseFloat(charObject[key].value);
      switch (key) {
        case 'Size':
          barObj.label1 = 'Too small';
          barObj.label2 = 'Perfect';
          barObj.label3 = 'Too large';
          break;
        case 'Width':
          barObj.label1 = 'Too narrow';
          barObj.label2 = 'Perfect';
          barObj.label3 = 'Too wide';
          break;
        case 'Comfort':
          barObj.label1 = 'Uncomfortable';
          barObj.label2 = 'Ok';
          barObj.label3 = 'Perfect';
          break;
        case 'Quality':
          barObj.label1 = 'Poor';
          barObj.label2 = 'Fair';
          barObj.label3 = 'Perfect';
          break;
        case 'Length':
          barObj.label1 = 'Runs short';
          barObj.label2 = 'Perfect';
          barObj.label3 = 'Runs long';
          break;
        case 'Fit':
          barObj.label1 = 'Runs tight';
          barObj.label2 = 'Perfect';
          barObj.label3 = 'Runs long';
          break;
        default:
          break;
      }
      charArray.push(barObj);
    }
    return charArray;
  } else {
    return [];
  }
}

export default ScoresList;