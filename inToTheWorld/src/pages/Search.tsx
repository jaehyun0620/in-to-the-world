import React from 'react';
import './styles/search.css';

interface searchProps {
  onSearch : (country : string) => void;
}

function Search({onSearch} : searchProps) {

  console.log('Search 렌더링')
  
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (event : React.FormEvent) =>{
    event.preventDefault();
    if(inputValue.trim()){
      onSearch(inputValue.trim());
    }
  }
  
  return (
    <div className='search-container'>
      <form className='box' onSubmit={handleSubmit}>
        <h2>다음 여행지는 어디인가요?</h2>
        <p>원하는 나라를 검색해 자세한 여행 정보를 확인하세요</p>

        <div className='input-container'>
          <input type="text" placeholder='나라명을 입력하세요' value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}/>
          <button type="submit">찾기</button>
        </div>

        {/* <p>인기 여행지</p>

        <ul className='popular-country'>
          <li><button>일본</button></li>
          <li><button>미국</button></li>
          <li><button>태국</button></li>
        </ul> */}
      </form>
    </div>
  )
}


export default Search;