import React, { useState } from 'react';

function ExampleWithManyStates() {
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    return(
        <div>
            <p>Age: {age}</p>
            <button onClick={() => setAge(age-1)}>-</button><button onClick={() => setAge(age+1)}>+</button>
            <p>Fruit: {fruit}</p>
            <button onClick={() => setFruit('apple')}>Set apple!</button>
        </div>
    );
}

export default ExampleWithManyStates;