import * as React from 'react';
import {Astronaut} from "./astronaut-row";
import {AstronautRow} from "./astronaut-row";


interface ListProps {
    astronauts: Astronaut[]
}

export const AstronautList = (props: ListProps): JSX.Element => (
    <ul className="list-group mb-3 col-md-3">
        {props.astronauts.map((astronaut, index) => <AstronautRow key={index} {...astronaut}/>)}
    </ul>
);

export default AstronautList;