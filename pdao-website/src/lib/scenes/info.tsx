import React, { RefObject, CSSProperties } from "react";
import { GiArchiveRegister } from "react-icons/gi";
import {
  AiFillHighlight,
  AiFillTrophy,
  AiFillFlag,
  AiOutlineUsergroupAdd,
  AiTwotoneNotification,
} from "react-icons/ai";
import { AiFillFolder } from "react-icons/ai";
interface InfoProps {
  infoRef: RefObject<HTMLSelectElement>;
  center: CSSProperties;
}
const Info = ({ infoRef, center }: InfoProps) => {
  return (
    <section ref={infoRef}>
      <hgroup>
        <h2 style={{ ...center, color: "white" }}>活動資訊</h2>
        <h5 style={{ ...center, color: "white" }}>
          內容僅供參考，以
          <a href="https://hackmd.io/@pdao/B1dLeK5Cs">正式活動簡章</a>為準。
        </h5>
        
      </hgroup>

      <div className="grid" style={{ alignItems: "baseline" }}>
        <div>
          <article>
            <h3 style={center}>
              <AiFillFlag></AiFillFlag>活動時間與地點
            </h3>
            <p>
              <h5>活動時間</h5>
              <small>2023 年 5 月 6 日（六）09:00 ~ 17:00</small>
              <br></br>
            </p>
            <p>
              <h5>活動地點</h5>
              <small>
                <ol>
                  <li>國立台灣大學管理學院二號館101教室</li>
                  <li>緯育附設台北職訓中心</li>
                  <li>達文西會議空間</li>
                </ol>
              </small>
            </p>
            <h5>時間表</h5>
            <small>
              <table>
                <tr>
                  <th>時間</th>
                  <th>活動內容</th>
                </tr>
                <tr>
                  <td>09:00 - 10:00</td>
                  <td>隊伍報到</td>
                </tr>
                <tr>
                  <td>10:00 - 11:00</td>
                  <td>開幕式暨規則說明</td>
                </tr>
                <tr>
                  <td>11:00 - 16:00</td>
                  <td>競賽時間</td>
                </tr>
                <tr>
                  <td>16:00 - 17:00</td>
                  <td>解題暨頒獎及閉幕式</td>
                </tr>
                <tr>
                  <td>17:00</td>
                  <td>賦歸</td>
                </tr>
              </table>
            </small>
          </article>
        </div>
        <div>
          <article>
            <h3 style={center}>
              <AiOutlineUsergroupAdd></AiOutlineUsergroupAdd>組隊辦法
            </h3>
            <p>
              <small>每隊由 2 至 3 名大專院校在學生組成。</small>
              <br></br>
            </p>
            <h5>參賽資格</h5>
            <small>
              <ol>
                <li>
                  111 學年度修習臺大資管系開設之《資料結構與進階程式設計 （課號
                  IM1010）》或《作業研究（課號 IM2010）》者。
                </li>
                <li>主修、雙主修國立臺灣大學資訊管理學系之學生</li>
                <li>國立臺灣大學學生</li>
                <li>國立臺灣大學系統三校聯盟學生</li>
                <li>上述資格外之大學在學學生</li>
              </ol>
            </small>
            <a href="https://www.facebook.com/groups/6579141708782117/">找不到隊友？</a>
            
          </article>
        </div>
        <div>
          <article>
            <h3 style={center}>
              <AiTwotoneNotification></AiTwotoneNotification>競賽辦法
            </h3>
            <p>
            <small>
              <h5>題組與時間</h5>
              本次競賽將有 12 道賽題，比賽時間為 5
              小時。題目敘述均為英文。參賽者可選用 C++ 或 Python
              撰寫程式碼。所有的題目皆保證可由 C++
              所撰寫的程式解出、但不保證皆可由 Python 3
              解出。賽後將提供題解資料。
            </small>
            </p>
            {/* <p>
            <h5>競賽規則</h5>
            <br></br>
            <small>
              <ol>
                <li>限用一台自備電腦</li>
                <li>臺大培訓班隊伍限制</li>
                <li>僅與隊友接觸</li>
                <li>網路存取限制</li>
                <li>禁止惡意行為</li>
              </ol>
            </small>
            </p> */}
            <p>
                <small>
                    <details>
                        <summary>提交所獲得的回應</summary>
                        <ol>
                            <li>Accepted: PDOGS 接受提交的程式碼。</li>
                            <li>Compile Error: 程式碼無法成功編譯。</li>
                            <li>Time Limit Exceed: 提交的程式太過耗時。</li>
                            <li>Memory Limit Exceed: 提交的程式太過耗費運算空間。</li>
                            <li>Runtime Error: 提交的程式結束時回傳數值（return code）不為零，通常是因為程式因權限錯誤遭作業系統終結。</li>
                            <li>Wrong Answer: 輸出錯誤答案。</li>
                        </ol>
                    </details>
                </small>
            </p>
            <p>
                <small>
                    <h5>計分與排名</h5>
                    <ul>
                        <li>隊伍以解題數量多者排名較前，解題數量相同時，以總消耗時間少者排名較前。</li>
                        <li>答對的題目的消耗時間計算方式為比賽開始至解出題目所消耗的分鐘數。如解出前有答錯，每答錯一次需要另加 20 分鐘。總消耗時間為所有答對題目的消耗時間加總。</li>
                        <li>未答對的題目不計消耗時間。如兩隊解題數與耗時皆相同，則以最後答對題目提交時間早者為勝。</li>
                    </ul>
                    
                </small>
            </p>
          </article>
        </div>
      </div>
      <div className="grid" style={{ alignItems: "baseline" }}>
        <div>
          <article>
            <h3 style={center}>
              <AiFillTrophy></AiFillTrophy>活動獎項
            </h3>
            <p>
              <h5>積極參與獎</h5>

              <small>所有參賽選手均可獲得參賽證明一份。</small>
              <br></br>
            </p>
            <p>
              <h5>排名獎勵</h5>
              <small>
                <ol>
                  <li>
                    競賽前二十名隊伍的每位隊員，均可獲得一份精美獎品及獎狀。
                  </li>
                  <li>所有隊伍中排名第一之隊伍將獲得 Dcard 企業參訪機會</li>
                  <li>
                    全由臺大資管系學生組成之所有隊伍中第一名將獲得 Dcard
                    企業參訪機會
                  </li>
                </ol>
                <details>
                  <summary>獎品列表</summary>
                  <ul>
                    <li>第一名：太空人手機架*1／人</li>
                    <li>第二至四名：秀泰電影院票*1／人</li>
                    <li>第五名：星巴克兩張＋電影票一張／隊</li>
                    <li>第六至十一名：星巴克兌換卷*3／隊</li>
                    <li>第十二到十三名：大麥克兌換卷*3／隊</li>
                    <li>第十四到二十名：資管週兌換卷*3／隊</li>
                  </ul>
                </details>
              </small>
              <br></br>
            </p>
          </article>
        </div>
        <div>
          <article>
            <h3 style={center}>
              <GiArchiveRegister></GiArchiveRegister>報名須知
            </h3>
            <p>
              <a href="https://forms.gle/CCTjrNRRTECNxSAs8">報名表單</a>
            </p>

            <p>
              <h5>報名費用</h5>
              <small>
                <ul>
                  <li>台大資管系學生： 專心打扣 100 / 披薩套餐 250</li>
                  <li>非台大資管系學生：專心打扣 150 / 披薩套餐 300</li>
                </ul>
              </small>
            </p>
            <p>
              <small>
                <details>
                  <summary>報名時間：2023/3/7~2023/3/24</summary>
                  <ul>
                    <li>將於2023/03/27(一)寄出報名結果通知信。</li>
                    <li>
                      報名結果公布後，開放隊伍於2023/04/07(五)前補齊報名資料，若未於期限內補齊，將依據候補名單遞補。
                    </li>
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
            <h3 style={center}>
              <AiFillFolder></AiFillFolder>競賽規則
            </h3>
            <p>
              <small>
                若違反下列規則，將可能導致參賽隊伍失去參賽或得獎資格。
              </small>
            </p>
            <p>
              <small>
                <ul>
                    <li>一隊限用一台自備電腦</li>
                  <li>
                    在比賽過程中，參賽者只能與隊友討論。競賽期間與任何其他生物聯繫均屬違規行為。
                  </li>
                  <li>
                    隊伍必須透過臺大資管系線上批改系統
                    <a href="https://pdogs.ntu.im/">PDOGS</a>
                    提交解答。每次提交均有 ID 以及提交時間的時間戳記。
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
  );
};
export default Info;
