import './index.css'; // 같은 경로에 있는 css 를 import 할때 from 적어주지 않아도 됨.
import axios from 'axios'; // npm install axios - package.json 과 node_modules에서 확인가능. Command 클릭시 axios 파일 export 확인 가능.
import React from 'react';
import { Link } from 'react-router-dom';

function MainPageComponent() {
    const [puppiesData, setPuppies] = React.useState([]); // puppiesData는 배열이므로 기본값으로 빈 배열을 넣어줌.
    React.useEffect(function () {
        // state를 바꿔서 또 렌더링이 되더라도 이 안의 값은 한번만 실행됩니다.
        // Postman 플랫폼에서 만들어 놓은 mock 서버
        // https://71057566-4814-4374-bd4e-c5e359ff7d22.mock.pstmn.io/puppies
        axios
            .get('https://71057566-4814-4374-bd4e-c5e359ff7d22.mock.pstmn.io/puppies')
            .then(function (result) {
                console.log('..... MainPageComponent [axios result]', result);
                const puppies = result.data.puppies;
                setPuppies(puppies);
            })
            .catch(function (err) {
                console.log('에러발생 -----', err);
            });
    }, []);

    return (
        <div>
            <div id="banner">
                <img src="images/banners/banner1.png" alt="banner1" />
            </div>
            <h1>사랑하는 애기들</h1>
            <div id="puppy-list">
                {puppiesData.map(function (data, idx) {
                    console.log(data, idx);
                    // puppies가 배열이므로 순회하는 함수 map 사용 - map 함수는 리턴 가능
                    return (
                        <div className="puppy-card">
                            {/* Link 적용 각각의 상세페이지 이동 설정 */}
                            {/* <Link className="puppy-link" to={'/puppy/' + idx}> */}
                            {/* <Link className="puppy-link" to={`/puppy/${idx}`}> */}
                            {/* 실제 postman 목서버에 만들어놓은 id */}
                            <Link className="puppy-link" to={`/puppies${data.id}`}>
                                <div>
                                    <img className="puppy-img" src={data.imageUrl} />
                                </div>
                                <div className="puppy-cont">
                                    <span className="puppy-name">{data.name}</span>
                                    <span className="puppy-status">{data.status} 놀아줭!!</span>
                                    <div className="puppy-seller">
                                        {/* /public은 생략가능한 경로임. */}
                                        <img className="puppy-avatar" src="images/icons/avatar.png" alt="avatar" />
                                        <span>{data.seller}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MainPageComponent;
