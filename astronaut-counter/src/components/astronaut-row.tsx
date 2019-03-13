import 'react';
import * as React from "react";

export interface Astronaut {
    name: string,
    craft: string
}

export const AstronautRow = (props: Astronaut): JSX.Element => (
    <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
            <h6 className="my-0">{props.name}</h6>
            <small className="text-muted">{props.craft}</small>
        </div>
    </li>
);