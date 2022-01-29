import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";


export default function Counter({ className, ...rest }) {
    const [viewPortEntered, setViewPortEntered] = useState(false);
    return (
        // <div className="m-10" style={{ marginBottom: "10px", marginTop: "50px" }}>
        //     <div className="pt-10 bg-black">
        //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

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
                        <h4 className="text-xl font-extrabold tracking-tight text-white sm:text-4xl count" ref={countUpRef} />
                    </VisibilitySensor>
                );
            }}
        </CountUp>
        //         </div>
        //     </div>
        // </div>
    )
}
