class MyHead extends React.Component {
    state = {};
    constructor() {
        super();
        this.state = {
            color: 'red'
        };
    }
    render() {
        // return React.createElement('h1', null, '安安你好安安'); // 相當於下面那段
        return (
            <h1
                style={{ color: this.state.color }}
                onClick={this.clickHandler}
                onMouseMove={this.Mousemove}
                onMouseOut={this.Mouseout}
            >
                安安你好安安 {this.props.level}
            </h1> // 箭頭函式的話用這段
            // <h1 onClick={this.clickHandler.bind(this)}>安安你好安安 {this.props.level}</h1> // 沒有用箭頭函示一定要 bind this
        );
    }
    clickHandler = e => {
        console.log(this);
    };

    Mousemove = () => {
        this.setState({ color: 'gray' });
    };

    Mouseout = () => {
        this.setState({ color: 'red' });
    };
}

class MyHeadList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <MyHead level="1" />
                <MyHead level="2" />
                <MyHead level="3" />
            </React.Fragment>
        );
    }
}
window.addEventListener('load', () => {
    let el = <MyHeadList />;
    ReactDOM.render(el, document.body);
});
