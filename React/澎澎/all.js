class MyHead extends React.Component {
    render() {
        return React.createElement(`H${this.props.level}`, null, '安安');
    }
}

class MyHeadList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { maxLevel: props.start };
        console.log(props.start);

        // window.setTimeout(() => {
        //     // this.setState({ maxLevel: 6 });
        //     this.setState((currentState, currentProps) => ({
        //         maxLevel: currentState.maxLevel + 1
        //     })); // 當下的 maxLevel + 1
        // }, 2000);
    }

    componentWillMount() {
        // 組件要繪製前的時刻，這更新完畫面會自動呼叫 render
        this.interValID = window.setInterval(() => {
            this.setState((currentState, currentProps) => {
                if (currentState.maxLevel > currentProps.end) {
                    return currentState;
                } else {
                    return { maxLevel: currentState.maxLevel + 1 };
                }
            });
        }, 1000);
    }

    componentWillUnmount() {
        // 組件要刪除前的時刻
        window.clearInterval(this.interValID);
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
    let myComponent = React.createElement(MyHeadList, { start: 2, end: 6 }); // 這裡的東西會被當　props　傳出去
    ReactDOM.render(myComponent, document.body);
});
