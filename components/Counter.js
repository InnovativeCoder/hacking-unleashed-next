import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

export default function Counter({ className, ...rest }) {
    const [viewPortEntered, setViewPortEntered] = useState(false);
    return (
        <div className="mx-10 mt-10 px-4 md:px-6 lg:px-16">
            <h1 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                More than
            </h1>
            
            <CountUp {...rest} start={viewPortEntered ? null : 0}>
                {({ countUpRef }) => {
                    return (
                    <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={isVisible => {
                        if (isVisible) {
                            setViewPortEntered(true);
                        }
                        }}
                        delayedCall
                    >
                        <h4 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl count" ref={countUpRef} />
                    </VisibilitySensor>
                    );
                }}
            </CountUp>
        </div>
    )
}
