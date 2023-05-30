import _ from 'lodash'

export default function solution(content){
  // BEGIN
  const normalizedContent = content.split('\n').map((elem) => (elem.split(','))).slice(1,-1);
  //console.log(normalizedContent);
  console.log('Count: ' + normalizedContent.length);

  const cities = normalizedContent.map(elem => ' ' + elem[7]).sort();
  const uniqCities = _.uniq(cities);
  console.log('Cities:' + uniqCities);

  const maxHumidityElem = normalizedContent.reduce((acc, elem) => {
    let maxHumidity = acc[3]
    if (elem[3] > maxHumidity) {acc = elem}
    return acc;
  })

  const minHumidityElem = normalizedContent.reduce((acc, elem) => {
    let minHumidity = acc[3]
    if (elem[3] < minHumidity) {acc = elem}
    return acc;
  })

  console.log(`Humidity: Min: ${minHumidityElem[3]}, Max: ${maxHumidityElem[3]}`);

  const getHottestDay = normalizedContent.reduce((acc, elem) => {
    let Hottestday = acc[1]
    if (elem[1] > Hottestday) {acc = elem}
    return acc;
  })

  console.log(`HottestDay: ${getHottestDay[0]} ${getHottestDay[7]}`);

  // const getHottestCity = normalizedContent.reduce((acc, elem) => {
  //   if (acc.includes(elem[7])) {acc[elem[7]].push(elem[2])}
  // }, []);

  // console.log(getHottestCity);
  // END

}