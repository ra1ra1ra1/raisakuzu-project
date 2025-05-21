import { useState } from 'react'

type GachaItem = {
    name: string
    link: string
    point: number
    probability: number
}

function Gacha() {
    const [count, setCount] = useState(0)
    const [gachaResult, setGachaResult] = useState<GachaItem[]>([])
    const [gachaPreviResult, setGachaPreviResult] = useState<GachaItem>()
    const [taskPoint, setTaskPoint] = useState(10)
    const [gachaPoint, setGachaPoint] = useState(0)

    console.log("🐣", gachaPreviResult);


    const items: GachaItem[] = [
        { name: "ぶた", link: "/buta.png", point: 10, probability: 2 },
        { name: "チャンピオンベルト", link: "/beruto.png", point: 5, probability: 3 },
        { name: "ハリセンボン", link: "/harisennbonn.png", point: 2, probability: 7.5 },
        { name: "イシオノ", link: "/isiono.png", point: 1, probability: 12.5 },
        { name: "真珠", link: "/kai.png", point: 10, probability: 2 },
        { name: "カズー", link: "/kng", point: 2, probability: 7.5 },
        { name: "剣", link: "/kenn.png", point: 5, probability: 3 },
        { name: "ワイン", link: "/wine.png", point: 1, probability: 12.5 },
        { name: "まがたま", link: "/magatama.png", point: 5, probability: 3 },
        { name: "モチヘビ", link: "/motihebi.png", point: 10, probability: 2 },
        { name: "ルービックキューブ", link: "/rubiku.png", point: 1, probability: 12.5 },
        { name: "サンゴ", link: "/sanngo.png", point: 10, probability: 2 },
        { name: "扇子", link: "/sennsu.png", point: 2, probability: 7.5 },
        { name: "ハンドスピナー", link: "/supina.png", point: 1, probability: 12.5 },
        { name: "盾", link: "/tate.png", point: 5, probability: 3 },
        { name: "地球儀", link: "/tikyuugi.png", point: 2, probability: 7.5 },
    ]

    const username = "ライサクズ"
    console.log("あなたの名前は", username, "です");
    console.log(`あなたの名前は${username}です`)


    const handleGacha = () => {
        setTaskPoint(taskPoint - 1)

        const randomIndex = Math.floor(Math.random() * items.length)
        const item = items[randomIndex]
        setGachaPreviResult(item)

        setGachaResult(prevResults => [...prevResults, item])
        setGachaPoint(gachaPoint + item.point)
        console.log("ガチャを引きました");
        console.log("result:", gachaResult);

    }



    return (
        <>
            <div style={{  display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "1rem",}}>
                <div style={{ width: "100%", textAlign: "center" }}><h2>ガチャ機能</h2></div>
                <div style={{ width: "100%", textAlign: "center" }}><p>あなたのポイント: {taskPoint}</p></div>
                <div style={{ width: "100%", textAlign: "center" }}><p>ガチャポイント: {gachaPoint}</p></div>

                <img src="/takarabako.png" alt="takarabako" />
                <div style={{ width: "100%", textAlign: "center" }}>{taskPoint > 0 ? <button onClick={handleGacha}>ガチャを引く</button> : <button disabled>ガチャを引く</button>}</div>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <p>今回のガチャ結果</p>
                    {gachaPreviResult == undefined ? null : <p><img src={`${gachaPreviResult?.link}`} alt="景品" /></p>}
                    {gachaPreviResult == undefined ? null : <p>ポイント: {gachaPreviResult.point}</p>}
                </div>
                {/* {gachaResult && <p>結果: {gachaResult}</p>} */}
                <div style={{ width: "100%", textAlign: "center" }}><p style={{ marginTop: 100 }}>ガチャ履歴</p></div>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <ul style={{ padding: "0" }}>
                            {gachaResult.map((item, index) => (
                                <li key={index} style={{ listStyleType: "none", }}>
                                    <img src={item.link} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>ポイント: {item.point}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
            <p className="read-the-docs">
            </p>
        </>
    )
}

export default Gacha