function Homebar() {
    return (

        <div style={{display: 'flex',
                     gap: '10px',
                     justifyContent: 'center',
                     alignItems: 'center',
                     padding: '5px'}}>
            <button style=
                {{
                    border : 'solid 2px red',
                    backgroundColor: '#ff7f50',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '10px',
                    width: '140px',
                    height: '80px'
                }}
            >
                <span>現在のポイント</span>
                <span style={{
                 fontSize: '1.2em', 
                 fontWeight: 'bold' }}>
                100pt</span>
            </button>
            <button style={{
                    border : 'solid 2px red',
                    backgroundColor: '#ff7f50',
                    textAlign: 'center',
                    padding: '10px',
                    width: '120px',
                    height: '80px'
            }}>
            ホーム</button>
            <button style={{
                    border : 'solid 2px red',
                    backgroundColor: '#ff7f50',
                    textAlign: 'center',
                    padding: '10px',
                    width: '120px',
                    height: '80px'
            }}>
             ガチャ
            </button>
        </div>

    )
}

export default Homebar;