var _ = require('lodash');

var singles = ['name', 'JSI', 'location', { city: 'Portland', 'state': 'OR' }, 'school', 'PCS'];

var pairs = [['name', 'JSI'], ['location', { city: 'Portland', 'state': 'OR' }], ['school', 'PCS']];

var nums = ['1', '2', '3', '4', '5', '6'];

var classData = _.reduce(pairs, function (obj, tuple) {
  obj[tuple[0]] = tuple[1];
  return obj;
  }, {});

// resultObj = classData;

// console.log(classData);
//=> { name: 'JSI', location: { city: 'Portland', state: 'OR' }, school: 'PCS' }


var zipObject = function (array) {
  var newObject = _.reduce(array, function (obj, pr) {
    obj[pr[0]] = pr[1];
    return obj;
    }, {});
  return newObject;
};

// console.log(zipObject(pairs));

var arrayToObject = function (array) {
  var miniArray = [];
  var pairsArray = _.reduce(array, function (prsAry, item) {
    if (miniArray.length === 1) {
      miniArray.push(item);
      prsAry.push(miniArray);
      miniArray = [];
    }
    else {miniArray.push(item);}
    return prsAry;
  }, []);
  var createObject = zipObject(pairsArray);
  return createObject;
};

console.log(arrayToObject(singles));
