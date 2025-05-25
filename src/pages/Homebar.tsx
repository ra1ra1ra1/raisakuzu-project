import { Link } from "react-router";




function Homebar() {
    return (

        <div style={{display: 'flex',
                     gap: '1px',
                     justifyContent: 'center',
                     alignItems: 'center',
                     padding: '5px'}}> 
        
        
        <Link to="/">
            <button style={{
                    border : 'solid 2px red',
                    backgroundColor: '#ff7f50',
                    textAlign: 'center',
                    padding: '10px',
                    width: '120px',
                    height: '80px',
                    position: 'fixed',
                    transform: 'translate(-46%)',
                    bottom : '15px'
            }}>  
            <img src="/images/home.png"
                 alt="ホームアイコン"
                 style={{
                    width: '40px',
                    height: '40px',
                    marginBottom: '5px'
               }}/>
            </button>
        </Link>
        <Link to="/gacha">
            <button style={{
                    border : 'solid 2px red',
                    backgroundColor: '#ff7f50',
                    textAlign: 'center',
                    padding: '10px',
                    width: '120px',
                    height: '80px',
                    position: 'fixed',
                    cursor: 'pointer',
                    bottom: '15px',
                    right: '170px',
            }}>
            <img src="/images/46333.png"
                 alt="ガチャアイコン"
                 style={{
                    width: '40px',
                    height: '45px',
                    marginBottom: '5px'
               }}/>
               
            </button> 
          </Link>
        </div>

    )
}

export default Homebar; 