import './stlyles/Footer.css';

function Footer() {

  return (
    <div className="footer-container">
      <h2>Ready to explore the world?</h2>

      <div className='develop-info'>
        <p>전 세계 나라 정보를 간단하게 검색하고 확인할 수 있는 개인 프로젝트입니다.  <br/>
          React + TypeScript + VanilaCSS로 제작했으며, 여행자에게 꼭 필요한 정보만 빠르게 보여주는 데 중점을 두었어요.</p>
        <p>© 2025 In to the world.</p>
        <ul>
          <a href="mailto:zzz6451@naver.com">Contact: zzz6451@naver.com</a>
          <a href="https://github.com/jaehyun0620">GitHub: https://github.com/jaehyun0620</a>
        </ul>
      </div>
    </div>
  )

}


export default Footer;