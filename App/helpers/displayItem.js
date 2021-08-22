/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const displayItem = (item) => {
  let keys = [];
  for(const k in item) keys.push(k);

  keys= keys.filter(value => {
      if (value === 'created' || value === 'edited' || value === 'url'){
        return false;
    }
    return true;
  });
  return keys;
}

export default displayItem;