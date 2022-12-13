(() => {
  // Destructuring an array 
  const arrayValue = [1,2,3,4];

  // assigning remaining elements to y with three dots
  const [x, ...y] = arrayValue;
  
  console.log(x);
  console.log(y);
  
  const [k, l, ...m] = arrayValue;
  console.log(k);
  console.log(l);
  console.log(m);

  // Destructuring an object
  const r2d2 = {
    name: 'R2-D2',
    height: 96,
    mass: 32
  };

  const { name, ...anotherValues } = r2d2;
  console.log(name);
  console.log(anotherValues);

  //how to clone an arry 
  console.log('Cloning an array');
  const array1 = [1,2];
  const array2 = [...array1];

  console.log(array1);
  console.log(array2);

  array1.push(3);
  console.log(array1);
  console.log(array2);

  //how to add objects into each other.
  const object1 = { a:1, b:2 };
  const object2 = { c:3, b:4 };
  const object3 = { ...object1, ...object2};
  const object4 = { ...object2, ...object1};

  console.log('how to add objects into each other.');
  console.log(object3);
  console.log(object4);
})();
