import React, {RefObject, CSSProperties} from 'react';
import { GiArchiveRegister } from "react-icons/gi"
import { AiFillTrophy } from "react-icons/ai"
import { RiFileInfoLine } from "react-icons/ri"

interface InfoProps {
    infoRef: RefObject<HTMLSelectElement>,
    center: CSSProperties,
}
const Info = ({infoRef, center}: InfoProps)=>{
    return (
        <section ref={infoRef}>
                    <hgroup>
                        <h2 style={center}>活動資訊</h2>
                        <h5 style={center}>內容僅供參考，以<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">正式活動簡章</a>為準。</h5>
                    </hgroup>

                    <div className="grid">
                        <div>
                            <article>
                                <h6 style={center}><AiFillTrophy></AiFillTrophy>活動獎項</h6>
                                <p>
                                    <small>積極參與獎：<br></br>
                                        所有參賽選手均可獲得PDOGS出品限量資料夾與參賽證明一份。
                                    </small>
                                </p>
                                <p>
                                    <small>排名獎勵：<br></br>
                                        競賽前五名隊伍的每位隊員，均可獲得一份精美獎品及獎狀。</small>
                                </p>
                                <p>
                                    <small>
                                        <details>
                                            <summary>企業參訪</summary>
                                            所有滿足以下條件的隊伍中，第一名的每位隊員將獲得5/20於神腦公司的企業參訪機會。
                                            <ul>
                                                <li>所有成員均主修或雙主修臺大資管系。</li>
                                                <li>報名時勾選「有意願參加5/20於神腦公司的企業參訪」。</li>
                                            </ul>

                                        </details>
                                    </small>
                                </p>

                            </article>
                        </div>
                        <div >
                            <article>
                                <h6 style={center}><GiArchiveRegister></GiArchiveRegister>報名須知</h6>
                                <p>
                                    <small>活動日期：2021/5/8(六) 8:30~18:00。</small>
                                </p>
                                <p>
                                    <small>
                                        活動地點：國立臺灣大學管理學院一號館103、B101。
                                    </small>
                                </p>
                                <p>
                                    <small>
                                        人數限制：2~3人一組
                                    </small>
                                </p>
                                <p>
                                    <small>
                                        防疫須知：競賽中請全程配戴口罩。
                                    </small>
                                </p>
                                <p>
                                    <small>
                                        <details>
                                            <summary>報名時間：2021/4/12~2021/4/21</summary>
                                            <ul>
                                                <li>將於2021年4月23日14:00公布報名結果於報名網站上</li>
                                                <li>報名結果公布後，開放隊伍於一定期間補齊報名資料，若未於期限內補齊，將依據候補名單遞補。</li>
                                            </ul>

                                        </details>
                                    </small>
                                </p>
                                <p>
                                    <small>
                                        <mark>
                                            本次活動設有報名隊伍數上限，因此當人數超過上限，我們將進行資格排序決定參賽隊伍。
                                        </mark>
                                    </small>
                                </p>
                            </article>
                        </div>
                        <div style={center}>
                            <article>
                                <h6 style={center} ><RiFileInfoLine></RiFileInfoLine>競賽規則</h6>
                                <p>
                                    <small>
                                        若違反下列規則，將可能導致參賽隊伍失去參賽或得獎資格。
                                    </small>
                                </p>
                                <p>
                                    <small>
                                        <ul>
                                            <li>
                                                共12道題目，比賽時間五小時，題目敘述皆為英文。
                                            </li>
                                            <li>
                                                隊伍必須透過臺大資管系線上批改系統<a href="https://pdogs.ntu.im/">PDOGS</a>提交解答。
                                            </li>
                                            <li>
                                                可選用 C++ 或 Python3 撰寫程式。
                                            </li>
                                            <li>
                                                一隊限用一台自備電腦。
                                            </li>
                                            <li>
                                                網路存取限制，禁止使用網路與其他隊伍或外界聯繫
                                            </li>
                                            <li>
                                                不得攜帶競賽機器外的任何通訊裝置、電子裝置、食物與飲料。
                                            </li>
                                        </ul>
                                    </small>
                                </p>
                            </article>
                        </div>
                    </div>
                </section>
    )
}
export default Info