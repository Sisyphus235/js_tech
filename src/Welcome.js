import React from 'react';
import PropTypes from 'prop-types';
class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state = {user:''};
        this.handleClick = this.handleClick.bind(this);
    }

    // static defaultProps = {
    //     name: 'shiyanlou'
    // }

    // static propTypes = {
    //     name: React.PropTypes.string
    // }

    handleClick(){
        console.log(this);
    }
    render(){
        return(
            <div>
                <h1>Hello,{this.props.name}</h1>
                <h2>Have a nice time!</h2>
                <button onClick={this.handleClick}>click me!</button>
            </div>
        );
    }
}

//propTypes 一般用来作类型检查
Welcome.propTypes = {
    name: PropTypes.string
};
//defaultProps 用来设置 props 的默认值
Welcome.defaultProps = {
    name: 'shiyanlou'
}
export default Welcome;
