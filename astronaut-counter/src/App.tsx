import * as React from 'react';
import './App.css';
import {Astronaut} from './components/astronaut-row';
import AstronautList from "./components/AstronautList";
import Space from './components/space';

interface State {
    astronauts: Astronaut[];
    loading: boolean
}

class App extends React.Component<any, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            astronauts: [],
            loading: true
        }
    }

    componentDidMount(): void {
        fetch("http://api.open-notify.org/astros.json")
            .then(response => response.json())
            .then(result => this.setState({astronauts: result.people, loading: false}))
    }

    public render() {
        return (
            <Space>
                <div className="astronaut-list">
                    <h1>Astronauts in Space</h1>
                    {this.state.loading && <h3>Loading...</h3>}
                    {!this.state.loading && (
                        <AstronautList
                            astronauts={this.state.astronauts}
                        />
                    )
                    }
                </div>
            </Space>
        );
    }
}

export default App;
