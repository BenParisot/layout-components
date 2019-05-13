import React from 'react';

export default function Dog() {
  const dog = {
    name: 'Joe',
    age: 5,
    weight: 90
  };
        
  return (
    <dl>
      <dt>Name</dt>
      <dd>{dog.name}</dd>
      <dt>Age</dt>
      <dd>{dog.age} years</dd>
      <dt>Weight</dt>
      <dd>{dog.weight} lbs</dd>
    </dl>
  );
}
