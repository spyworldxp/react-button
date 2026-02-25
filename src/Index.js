import React from 'react';
import { createRoot } from 'react-dom/client';
import Column from './Column';

const Example = () => {
    return (
        <div style={{ display: 'flex', width: '200px' }}>
            <Column color="Red" />
            <Column color="Blue" />
            <Column color="Black" />
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Example />);
