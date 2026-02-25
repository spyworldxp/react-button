import React, { useState, useEffect } from 'react';

const Button = ({ num: initialNum, color }) => {
    const [num, setNum] = useState(initialNum !== undefined ? initialNum : 'Back');

    useEffect(() => {
        if (initialNum !== undefined) {
            setNum(initialNum);
        }
    }, [initialNum]);

    const clicked = () => {
        if (typeof num === 'number' && num < 20) {
            setNum(prev => prev + 1);
        }
    };

    return (
         <div>
             A Button
              <button onClick={clicked} style={{
                      backgroundColor: 'white',
                      borderRadius: '15px',
                  padding: '5px 5px',
                  border: '2px solid '+ color
              }}>
                  {typeof num === 'number' ? color + num : num}
              </button> 
         </div>
    );
};

export default Button;
