import React, { useState } from 'react';
import Button from './Button';

const Column = ({ color }) => {
    const [numbers] = useState(() => {
        const count = Math.floor(Math.random() * 10) + 1;
        return Array.from({ length: count }, (_, i) => i + 10);
    });

    return (
        <div style={{ flex: 1 }}>
            {numbers.map((num) => (
                <Button key={num} num={num} color={color} />
            ))}
        </div>
    );
};

export default Column;
