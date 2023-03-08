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
                        <h2 style ={{...center, color: "white"}}>聯絡我們</h2>
                        <h6 style ={{...center, color: "white"}}>如有任何疑問，歡迎來信洽詢：<a href="mailto: pdaopdao@ntu.im">pdaopdao@ntu.im</a></h6>
                        <h6 style ={{...center, color: "white"}}>Programming Design And Optimization Website</h6>
                        <h6 style ={{...center, color: "white"}}>Information Management, National Taiwan University</h6>
                        <small style ={{...center, color: "white"}}>
                            Last Updated:&nbsp;
                            {lastUpdate.toLocaleString("en-ZA", { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </small>
                    </hgroup>
                </section>
    )
}
export default Contact