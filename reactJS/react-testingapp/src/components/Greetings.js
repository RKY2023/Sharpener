import { useState } from 'react';
import Output from './Outputs';


const Greeting = () => {
    const [text, setText] = useState('BeforeText');
    const [changeText, setChangeText] = useState(false);

    const changeHandler = () => {
        setChangeText(true);
    }
    return (
        <div>
            <h2>Hello World!</h2>
            {!changeText && <Output>It's good to see you!</Output>}
            {changeText && <Output>Changed!</Output>}
            <button onClick={changeHandler}>Change Text</button>
        </div>
    );
};
export default Greeting;