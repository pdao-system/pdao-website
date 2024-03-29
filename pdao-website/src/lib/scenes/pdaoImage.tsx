import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const center = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};
interface PdaoImageProps {
  windowWidth: number;
}

const PdaoImage = ({ windowWidth }: PdaoImageProps) => {

    const isNonMobileScreens = useMediaQuery("(min-width:10000px)");
    if(!isNonMobileScreens){
        return (
            <div style={{height: '850px', width: '60%', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                    <StaticImage src="../../images/logo_vertical.PNG" alt="logo"></StaticImage> 
                </div>
            </div>
        )
    }
  const logoRef = useRef(null);
  const moonRef = useRef(null);
  const starsRef = useRef(null);
  const galaxyRef = useRef(null);
  const part1Ref = useRef(null);
  const rocketRef = useRef(null);
  const astro1Ref = useRef(null);
  const astro2Ref = useRef(null);
  const part2Ref = useRef(null);

  const isBrowser = () => typeof window !== "undefined";

  isBrowser() &&
    window.addEventListener("scroll", () => {
      let value = window.scrollY;

      // logoRef.current.style.transform = 'translateX('+value-400+
      console.log(value);
      if (value <= 2000) {
        logoRef.current.style.transform =
          "translateX(" +
          (value * 0.5 - 1000) +
          "px)" +
          " translateY(" +
          (value * 1 + 100) +
          "px)";
        moonRef.current.style.transform =
          "translateY(" + (value * 0.7 + 1000) + "px)";
        starsRef.current.style.transform =
          "translateX(" +
          (value * 0.2 - 1000) +
          "px)" +
          " translateY(" +
          (value * 1.2 - 200) +
          "px)";
        galaxyRef.current.style.transform =
          "translateX(" +
          (0 - 400) +
          "px)" +
          " translateY(" +
          (value * 1.2 - 1100) +
          "px)";
      } else if (2000 <= value && value <= 4000) {
        if(value <= 2100){
          console.log('!')
          moonRef.current.style.opacity = 1
          rocketRef.current.style.opacity = 1
          // astro1Ref.current.style.opacity = 1
          // astro2Ref.current.style.opacity = 1
        }
        
        logoRef.current.style.transform =
          "translateX(" +
          0 +
          "px)" +
          " translateY(" +
          (value * 0.2 + 1700) +
          "px)";
        moonRef.current.style.transform = "translateY(" + (value + 400) + "px)";
        starsRef.current.style.transform =
          "translateX(" +
          (value * 0.6 - 1800) +
          "px)" +
          " translateY(" +
          (value * 2 - 1800) +
          "px)";
          
          part1Ref.current.style.opacity = (value - 2500.0)/500;
          part1Ref.current.style.transform =
          "translateX(-20vw)" + " translateY(" + (value * 0.8 + 1000) + "px)";

      } else if (4000 <= value && value <= 6500) {
        
        moonRef.current.style.transform = "translateY(" + (value + 400) + "px)";
        part1Ref.current.style.transform =
          "translateX(-20vw)" + " translateY(" + (value * 0.8 + 1000) + "px)";
        part2Ref.current.style.transform =
          "translateX(25vw)" + " translateY(" + (value * 0.8 + 1000) + "px)";
        part2Ref.current.style.opacity = (value - 4000.0)/500 

        rocketRef.current.style.transform =
          "translateX(" +
          (-value + 4000 + 1500) +
          "px)" +
          " translateY(" +
          value +
          "px)" +
          " rotate(" +
          (-(value - 4000.0) / 2500) * 360 +
          "deg)";
        rocketRef.current.style.zIndex = 2;
        if (value >= 5000) {
          rocketRef.current.style.zIndex = 4;
          rocketRef.current.style.transform =
            "translateX(" +
            500 +
            "px)" +
            " translateY(" +
            (value * 1.2 - 1000) +
            "px)" +
            " rotate(" +
            (-(value - 4000.0) / 2500) * 360 +
            "deg)";
        }
      } else if (6500 <= value && value <= 8000) {
        astro2Ref.current.style.opacity = 0;
        moonRef.current.style.transform = "translateY(" + (value + 400) + "px)";
        rocketRef.current.style.transform =
          "translateX(" +
          500 +
          "px)" +
          " translateY(" +
          (value + 6500 * 0.2 - 1000) +
          "px)";
        astro1Ref.current.style.opacity = (value - 6500.0) / 250;
        astro1Ref.current.style.transform =
          "translateX(" +
          400 +
          "px)" +
          " translateY(" +
          (value + 6500 * 0.2 - 1000) +
          "px)";
        if (value <= 7000 && value >= 6750) {
          astro1Ref.current.style.opacity = (7000.0 - value) / 250;
        } else if (value <= 7250 && value >= 7000) {
          astro1Ref.current.style.opacity = (value - 7000.0) / 250;
          astro1Ref.current.style.transform =
            "translateX(" +
            300 +
            "px)" +
            " translateY(" +
            (value + 6500 * 0.2 - 1000) +
            "px)";
        } else if (value <= 7500 && value >= 7250) {
          astro1Ref.current.style.opacity = (7500.0 - value) / 250;
          astro1Ref.current.style.transform =
            "translateX(" +
            300 +
            "px)" +
            " translateY(" +
            (value + 6500 * 0.2 - 1000) +
            "px)";
        } else if (value <= 7750 && value >= 7500) {
          astro1Ref.current.style.opacity = (value - 7500.0) / 250;
          astro1Ref.current.style.transform =
            "translateX(" +
            200 +
            "px)" +
            " translateY(" +
            (value + 6500 * 0.2 - 1000) +
            "px)";
        } else if (value <= 8000 && value >= 7750) {
          astro1Ref.current.style.opacity = (8000.0 - value) / 250;
          astro1Ref.current.style.transform =
            "translateX(" +
            200 +
            "px)" +
            " translateY(" +
            (value + 6500 * 0.2 - 1000) +
            "px)";
        }
        astro2Ref.current.style.transform =
          "translateX(" +
          200 +
          "px)" +
          " translateY(" +
          (value + 6500 * 0.2 - 1000) +
          "px)";
      } else if (8000 <= value && value <= 9000) {
        astro1Ref.current.style.opacity = 0;

        astro2Ref.current.style.transform =
          "translateX(" +
          200 +
          "px)" +
          " translateY(" +
          (value + 6500 * 0.2 - 1100) +
          "px)";
        moonRef.current.style.transform = "translateY(" + (value + 400) + "px)";
        rocketRef.current.style.transform =
          "translateX(" +
          500 +
          "px)" +
          " translateY(" +
          (value + 6500 * 0.2 - 1000) +
          "px)";
        if (value <= 8250) {
          astro2Ref.current.style.opacity = (value - 8000.0) / 250;
        }
      } else if(value >= 9000){
        moonRef.current.style.opacity = (-value+9200.00)/200
        rocketRef.current.style.opacity = (-value+9200.00)/200
        astro2Ref.current.style.opacity = (-value+9200.00)/200
      }

    });

  return (
    <div style={{ scrollBehavior: "smooth" }}>
      {/* <div style={{ display: "grid" }}>
                <StaticImage
                    style={{
                        gridArea: "1/1",
                        // You can set a maximum height for the image, if you wish.
                        // maxHeight: 600,
                        
                    }}
                    layout="fullWidth"
                    // You can optionally force an aspect ratio for the generated image
                    aspectRatio={2 / 1}
                    // This is a presentational image, so the alt should be an empty string
                    alt="ntu"
                    // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                    src="../../images/space.jpg"
                />
                
            </div> */}
      {/* <div
                    style={{
                        // By using the same grid area for both, they are stacked on top of each other
                        
                        position: "relative",
                        // This centers the other elements inside the hero component
                        placeItems: "center",
                        display: "grid",
                        color: "white",
                        fontSize: '300px',
                        fontWeight: "bold"
                    }}
                >
                    {/* Any content here will be centered in the component */}

      <div
        style={{
          position: "relative",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div
          ref={logoRef}
          style={{
            maxWidth: windowWidth * 0.5,
            position: "absolute",
            transform: "translateX(-1000px) translateY(100px)",
          }}
        >
          <StaticImage src="../../images/logo_vertical.PNG" alt="PDAO LOGO" />
        </div>

        <div
          ref={moonRef}
          style={{
            maxWidth: windowWidth * 1,
            position: "absolute",
            transform: "translateX(0px) translateY(1000px)",
            zIndex: 3,
          }}
        >
          <StaticImage src="../../images/moon.PNG" alt="moon" />
        </div>
        <div
          ref={starsRef}
          style={{
            width: "20vw",
            height: "30vh",
            transform: "translateX(-1000px)",
            position: "absolute",
            zIndex: 2,
          }}
        >
          <StaticImage src="../../images/stars.PNG" alt="stars" />
        </div>
        <div
          ref={galaxyRef}
          style={{
            maxWidth: windowWidth * 0.8,
            position: "absolute",
            transform: "translateX(-400px) translateY(-1100px) ",
            zIndex: 1,
          }}
        >
          <StaticImage src="../../images/galaxy.PNG" alt="galaxy"></StaticImage>
        </div>
        <div
          ref={part1Ref}
          style={{
            maxWidth: windowWidth * 0.4,
            position: "absolute",
            color: "white",
            fontSize: "1rem",
            transform: "translateX(-20vw) translateY(-300px) ",
            opacity: 0,
          }}
        >
          太空任務日誌．代號 S04】第一部／二部
          <br />
          ∙主線目標｜尋找潛在人類適居星球
          <br />
          ∙參與人員｜鈦空郎 上校、史貝斯 上士、史達 中士、普雷尼特 中士
          <br />
          ∙服役載具｜批狗號 壹代太空船
          <br />
          ∙日誌時間｜西元貳壹貳參年伍月壹日 格林威治標準時間拾捌時
          <br />
          <br />
          二十二世紀，地球面臨資源枯竭及垃圾堆積的兩大危機。再過百年不到，地球將不再適合人類居住。太空總部因此發起太空生態調查系列任務，旨在為人類找到第二顆地球，代號
          Sierra。作為 Sierra
          總指揮，鈦空郎被指派帶領三位宇航員前往熾星系尋找潛在人類適居星球。
          <br />
          <br />
          「領航員，匯報預計航行時間。」艦長鈦空郎一邊翻閱任務文件，一邊命令道
          <br />
          <br />
          「報告長官，以飛行速度推估，我們將於二十小時後抵達目標星球。」史貝斯回道
          <br />
          <br />
          「很好，駕駛員請將飛行模式轉為自動駕駛。」
          <br />
          <br />
          普雷尼特點頭示意，並按下右前方的自動駕駛按鈕。
          <br />
          <br />
          （叮——）太空船轉由電腦接手駕駛。艦長將機組人員聚集到駕駛艙的圓桌，說明任務目標，並共同研擬執行計畫。
          <br />
          <br />
          「⋯⋯當我們離目標星球足夠近時，我會先行駕駛偵查機，進入⋯⋯」史達的計畫提案被刺耳的儀器故障聲打斷
          <br />
          <br />
          （嗶——嗶——）
          <br />
          <br />
          「受到鄰近星球重力場影響，船體部分儀器及部件失靈。」史貝斯先是愣住後又看向儀表板說道
          <br />
          <br />
          「失效⋯⋯自動駕駛！手動駕駛，駕駛員，立刻！」一向冷靜的史貝斯故作鎮定，但混亂的文法出賣了他
          <br />
          <br />
          ===
          <br />
          <br />
          製圖｜陳巧蓉
          <br />
          文案｜顧寬証
          <br />-
        </div>

        <div
          ref={part2Ref}
          style={{
            maxWidth: windowWidth * 0.4,
            position: "absolute",
            color: "white",
            fontSize: "1rem",
            transform: "translateX(-20vw) translateY(200px) ",
            opacity: 0,
          }}
        >
          【太空任務日誌．代號 S04】第二部／二部 ∙主線目標｜尋找潛在人類適居星球<br/>
          ∙參與人員｜鈦空郎 上校、史貝斯 上士、史達 中士、普雷尼特 中士<br/>
          ∙服役載具｜批狗號 壹代太空船<br/>
          ∙日誌時間｜西元貳壹貳參年伍月壹日 格林威治標準時間拾捌時<br/>
          <br/>
          （轟隆——）自動駕駛的失靈導致一顆隕石扎實地撞在船身。鈦空郎扶著圓桌從地面緩緩站起，環顧四周。雖然機組人員皆無大礙，但駕駛艙失去了控制。<br/>
          <br/>
          「艦長，我們正高速朝向未知星球墜落，估計一分鐘後進入大氣層。考量現行速度及大氣層厚度，船體墜地時速度將高達數百公里。」面對生死關頭，史貝斯不得不冷靜分析<br/>
          <br/>
          鈦空郎眉頭緊皺不發一語，手中的任務文件已被揉成團狀。他高速運轉的腦中早已有了最佳決策，但卻難以開口。批狗號身為老舊的二代太空船，全船只配備一個逃生船。以時數數百公里墜地，即使倖存，也無法脫離星球。必須有一人回到太空站，駕駛新型太空船救援其餘墜落成員。
          「我上逃生艙吧！」史達似乎明白了<br/>
          <br/>
          鈦空郎表示很慶幸自己不用做承擔壓力的那個人，想都沒想就帶著史達匆匆離開駕駛艙，跑向逃生船。<br/>
          <br/>
          「在這，快進去！再見，我相信你。」鈦空郎指著逃生船並對史達說<br/>
          <br/>
          「再見。」史達意味深長的回道，卻站在原地不動<br/>
          <br/>
          鈦空郎愣住了，還沒回過神，就被史達一把推入逃生船，並關上艙門。<br/>
          <br/>
          「我們也相信你。」（咻——）史達按下噴射鈕，將希望都寄託在艦長身上。<br/>
          <br/>
          代號 S04 太空任務，僅艦長一人返回太空站，其餘機組人員失聯，生死未卜。<br/>
          <br/>
          ===<br/>
          <br/>
          製圖｜陳巧蓉<br/>
          文案｜顧寬証<br/>
          
        </div>

        <div
          ref={rocketRef}
          style={{
            width: "20rem",
            height: "20rem",
            position: "absolute",
            transform: "",
            zIndex: 2,
          }}
        >
          <StaticImage src="../../images/rocket.PNG" alt="rocket"></StaticImage>
        </div>

        <div
          ref={astro1Ref}
          style={{
            width: "20rem",
            height: "20rem",
            position: "absolute",
            transform: "",
            opacity: 0,
            zIndex: 5,
          }}
        >
          <StaticImage src="../../images/astro1.PNG" alt="astro1"></StaticImage>
        </div>

        <div
          ref={astro2Ref}
          style={{
            width: "30rem",
            height: "30rem",
            position: "absolute",
            transform: "",
            opacity: 0,
            zIndex: 5,
            color: "white"
          }}
        >
          <StaticImage src="../../images/astro2.PNG" alt="astro2"></StaticImage>
        </div>
      </div>
    </div>
  );
};
export default PdaoImage;
