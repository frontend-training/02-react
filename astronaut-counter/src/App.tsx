import * as React from 'react';
import './App.css';

class App extends React.Component {
    public render() {
        return (
            <>
                <div className="astronaut-list">
                    <h1>Astronauts in Space</h1>
                    <ul className="list-group mb-3 col-md-3">
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Oleg Kononenko</h6>
                                <small className="text-muted">ISS</small>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">David Saint-Jacques</h6>
                                <small className="text-muted">ISS</small>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Anne McClain</h6>
                                <small className="text-muted">ISS</small>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="earth">
                    <div className="earth-shadow"/>
                </div>
                <div className="moon"/>
                <div className="stars"/>
                <div className="stars-2"/>
            </>
        );
    }
}

export default App;
