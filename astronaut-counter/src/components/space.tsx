import * as React from 'react';

interface SpaceProps {
    children: JSX.Element
}

const Space = (props: SpaceProps): JSX.Element => (
    <>
        {props.children}
        <div className="earth">
            <div className="earth-shadow"/>
        </div>
        <div className="moon"/>
        <div className="stars"/>
        <div className="stars-2"/>
    </>
);

export default Space;