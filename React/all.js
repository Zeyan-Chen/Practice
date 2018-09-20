class MyHead extends React.Component {
    render() {
        console.log(this.props);
        return React.createElement(`H${this.props.level}`, null, '安安');
    }
}

class MyHeadList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { maxLevel: 3 };
        window.setTimeout(() => {
            // this.setState({ maxLevel: 6 });
            this.setState((currentState, currentProps) => ({
                maxLevel: currentState.maxLevel + 1
            })); // 當下的 maxLevel + 1
        }, 2000);
    }
    render() {
        let heads = [];
        let head;
        for (let i = 1; i < this.state.maxLevel; i++) {
            head = React.createElement(MyHead, { level: i });
            heads.push(head);
        }
        return React.createElement('DIV', null, heads);
    }
}
window.addEventListener('load', () => {
    // React.createElement(你的class, 你要傳的值ex: {level: 3})
    let myComponent = React.createElement(MyHeadList, null); // 這裡的東西會被當　props　傳出去
    ReactDOM.render(myComponent, document.body);
});
