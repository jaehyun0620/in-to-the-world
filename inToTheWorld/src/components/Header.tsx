import './stlyles/Header.css'

function Header() {


  return (
    <div className='container'>
      <div className='title'>
        <h1>전 세계를</h1>
        <p>쉽게 발견하세요</p>
      </div>
      <p className='context'>현재 여행자를 위한 꼭 필요한 정보</p>

      <ul>
        <li>195+ Countries</li>
        <li>Real-time Data</li>
        <li>Curated Info</li>
      </ul>
    </div>
  )
}

export default Header;