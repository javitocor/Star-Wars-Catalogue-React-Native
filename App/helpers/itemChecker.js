/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import searchApi from './searchAPI';

const valueCheck =(item, keys)=>{
  const tmp = [];
  for(const k in keys) {
    if(typeof(item[keys[k]]) === 'object' || keys[k] === 'homeworld') {
      tmp.push(keys[k]);
    }
  }
  return tmp;
};

const infoChecker = async (item, key) => {
  const arrayInfo = item[key];
  const tempArray = [];
  if(typeof(arrayInfo) === 'string' ) {
    const homeworld = await searchApi(arrayInfo)
    tempArray.push({name:homeworld.name, url:homeworld.url});
  } else {
    if (arrayInfo.length === 0) return false
    for (const link of arrayInfo){
      const response = await searchApi(link);
      if(key==='films'){
        tempArray.push({title:response.title, url:response.url});
      } else {
        tempArray.push({name:response.name, url:response.url});
      };
    }
  }  
  return tempArray
}

async function itemChecker (item, keys) {
  const finalObj = {};
  const objectKeys = valueCheck(item, keys);
  for (let index = 0; index < objectKeys.length; index++){
    const key = objectKeys[index];
    const data = await infoChecker (item, key);
    if(data){
      finalObj[key] = data;
    } else {
      finalObj[key] = [];
    }
  }
  return [finalObj, objectKeys];
}

export default itemChecker;