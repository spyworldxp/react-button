import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = 
            {
                num:'Back'
            }
        

        this.clicked = this.clicked.bind(this);
    }

    componentDidMount(){

        
        if(this.props.num !== undefined ){
            this.setState({ num: this.props.num });
        }


    }

    componentDidUpdate(prevProps) {
        if (this.props.num !== prevProps.num) {
            this.setState({ num: this.props.num });
        }
    }
    
    clicked(){
        if(this.state.num < 20){
            this.setState((state) => ({ num: state.num + 1 }));
        }
    }
    

  render() {
      let text = this.state.num;
      return (
         <div>
             A Button
              <button onClick={() => {
                  this.clicked()
              }} style={{
                      backgroundColor: 'white',
                      borderRadius: '15px',
                  padding: '5px 5px',
                  border: '2px solid '+this.props.color
              }}>
                  {typeof this.state.num == 'number' ? this.props.color + this.state.num : this.state.num}
              </button> 
         </div>
      );
    };
}

