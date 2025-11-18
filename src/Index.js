import React from 'react';
import { createRoot } from 'react-dom/client';
import Column from 'Column';


class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allButton:[]
        }

    }

    componentDidMount(){
    }



  render() {
    return (
        <div style={{ display: 'flex',width:'200px'}}>
                <Column color="Red" />
                <Column color="Blue" />
                <Column color="Black" />
            </div>
    )
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Example />);
