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
                        <h5 style={center}>內容僅供參考，以<a href="https://hackmd.io/@pdao/B1dLeK5Cs">正式活動簡章</a>為準。</h5>
                    </hgroup>

                    <div className="grid">
                        <div>
                            <article>
                                <h6 style={{...center, color:'black'}} ><AiFillTrophy></AiFillTrophy>活動獎項</h6>
                                <p>
                                    <small>積極參與獎：<br></br>
                                        所有參賽選手均可獲得參賽證明一份。
                                    </small>
                                </p>
                                <p>
                                    <small>排名獎勵：<br></br>
                                    競賽前十五名隊伍的每位隊員，均可獲得一份精美獎品及獎狀。
                                    </small>
                                </p>
                            </article>
                        </div>
                        <div >
                            <article>
                                <h6 style={{...center, color:'black'}}><GiArchiveRegister></GiArchiveRegister>報名須知</h6>
                                <p>
                                    <small>活動日期：2023/5/6(六)09:00~17:00。</small>
                                </p>
                                <p>
                                    <small>
                                        活動地點：<br></br>
                                        <ol>
                                            <li>國立台灣大學管理學院二號館101教室 (專心打扣方案/只能在走廊用餐)</li>
                                            <li>緯育附設台北職訓中心 (台北市中山區南京東路三段219號5樓) (披薩套餐)</li>
                                            <li>達文西會議空間 (台北市中山區南京東路二段6號6樓) (披薩套餐)</li>
                                        </ol>
                                    </small>
                                </p>
                                <p>
                                    <small>
                                        人數限制：<br></br>
                                        參賽者必須組隊參加，一隊最少 2 人、最多 3 人。每隊至多包含 2 位 ICPC 培訓班成員。
                                    </small>
                                </p>
                                <p>
                                    <small>
                                        <details>
                                            <summary>報名時間：2023/3/7~2023/3/24</summary>
                                            <ul>
                                                <li>將於2023/03/27(一)寄出報名結果通知信。</li>
                                                <li>報名結果公布後，開放隊伍於2023/04/07(五)前補齊報名資料，若未於期限內補齊，將依據候補名單遞補。</li>
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
                                <h6 style={{...center, color:'black'}} ><RiFileInfoLine></RiFileInfoLine>競賽規則</h6>
                                <p>
                                    <small>
                                    本次競賽將有 12 道賽題，比賽時間為 5 小時。題目敘述均為英文。參賽者可選用 C++ 或 Python 撰寫程式碼。所有的題目皆保證可由 C++ 所撰寫的程式解出、但不保證皆可由 Python 3 解出。賽後將提供題解資料。
                                    </small>
                                </p>
                                <p>
                                    <small>
                                    賽前隊伍需回傳表單保證該隊伍遵照下述規則進行比賽。若違反下列規則，將可能導致參賽隊伍失去參賽或得獎資格。
                                    </small>
                                </p>
                                <p>
                                    <small>
                                        <ul>
                                            <li>
                                                在比賽過程中，參賽者只能與隊友討論。競賽期間與任何其他生物聯繫均屬違規行為。
                                            </li>
                                            <li>
                                                隊伍必須透過臺大資管系線上批改系統<a href="https://pdogs.ntu.im/">PDOGS</a>提交解答。每次提交均有 ID 以及提交時間的時間戳記。
                                            </li>
                                            <li>
                                            參賽者只能夠透過網路下載題目敘述、上傳解答程式碼、提問澄清疑點、查看計分板、上網搜尋資料及與隊友溝通。使用網路與其他隊伍或外界聯繫均屬違規行為。
                                            </li>
                                            <li>
                                            不得做出任何意圖妨礙比賽進行及影響比賽公平性的惡意行為。
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