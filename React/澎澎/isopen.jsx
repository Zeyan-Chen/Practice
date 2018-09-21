class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { on: true };
    }

    render() {
        let className = 'switch';
        if (this.state.on) {
            className += ' switch-on';
        }
        return (
            <div className={className} onClick={this.update}>
                <div className="btn" />
            </div>
        );
    }

    update = () => {
        this.setState(currentState => ({ on: !currentState.on }));
    };
}

window.addEventListener('load', () => {
    ReactDOM.render(<Switch />, document.body);
});
