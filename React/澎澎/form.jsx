class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: 'male',
            name: '',
            story: ''
        };
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} action="">
                Name:{' '}
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handlerNameChange}
                />
                <br />
                Gender:
                <select
                    value={this.state.gender}
                    onChange={this.handleSelectChange}
                >
                    <option value="male">男</option>
                    <option value="female">女</option>
                </select>
                <br />
                <br />
                Story:
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    value={this.state.story}
                    onChange={this.handlerTextArea}
                />
                <input type="submit" value="通通給我送起來" />
                <h1>{this.state.name}</h1>
                <h2>{this.state.gender}</h2>
            </form>
        );
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log('通通給我送起來');
        console.log('name: ' + this.state.name);
        console.log('gender: ' + this.state.gender);
        console.log('story: ' + this.state.story);
    };
    // 性別切換
    handleSelectChange = e => {
        this.setState({ gender: e.currentTarget.value }); // 利用 currentTarget 去取值
    };
    // 名字切換
    handlerNameChange = e => {
        this.setState({ name: e.currentTarget.value });
    };
    handlerTextArea = e => {
        this.setState({ story: e.currentTarget.value });
    };
}

window.addEventListener('load', function(params) {
    ReactDOM.render(<MyForm />, document.body);
});
