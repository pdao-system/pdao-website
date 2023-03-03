import React, {RefObject, CSSProperties} from 'react';

interface ContactProps {
    contactRef: RefObject<HTMLSelectElement>,
    center: CSSProperties,
    lastUpdate: Date
}
const Contact = ({contactRef, center, lastUpdate}: ContactProps)=>{
    return (
        <section ref={contactRef}>
                    <hgroup>
                        <h2 style={center}>聯絡我們</h2>
                        <h6 style={center}>如有任何疑問，歡迎來信洽詢：<a href="mailto: pdaopdao@ntu.im">pdaopdao@ntu.im</a></h6>
                        <h6 style={center}>Programming Design And Optimization Website</h6>
                        <h6 style={center}>Information Management, National Taiwan University</h6>
                        <small style={center}>
                            Last Updated:&nbsp;
                            {lastUpdate.toLocaleString("en-ZA", { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </small>
                    </hgroup>
                </section>
    )
}
export default Contact