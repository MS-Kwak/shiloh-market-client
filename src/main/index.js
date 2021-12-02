import './index.css'; // 같은 경로에 있는 css 를 import 할때 from 적어주지 않아도 됨.
import axios from 'axios'; // npm install axios - package.json 과 node_modules에서 확인가능. Command 클릭시 axios 파일 export 확인 가능.
import React from 'react';

function MainPageComponent() {
    const [puppies, setPuppies] = React.useState([]); // puppies는 배열이므로 기본값으로 빈 배열을 넣어줌.
    React.useEffect(function () {
        // state를 바꿔서 또 렌더링이 되더라도 이 안의 값은 한번만 실행됩니다.
        // Postman 플랫폼에서 만들어 놓은 mock 서버
        // https://71057566-4814-4374-bd4e-c5e359ff7d22.mock.pstmn.io/puppies
        axios
            .get('https://71057566-4814-4374-bd4e-c5e359ff7d22.mock.pstmn.io/puppies')
            .then(function (result) {
                console.log('[axios result]', result);
                const puppies = result.data.puppies;
                setPuppies(puppies);
            })
            .catch(function (err) {
                console.log('에러발생 -----', err);
            });
    }, []);

    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="images/icons/logo.png" alt="logo" />
                </div>
            </div>
            <div id="container">
                <div id="banner">
                    <img src="images/banners/banner1.png" alt="banner1" />
                </div>
                <h1>사랑하는 애기들</h1>
                <div id="puppy-list">
                    {puppies.map(function (puppy, idx) {
                        console.log(puppy, idx);
                        // puppies가 배열이므로 순회하는 함수 map 사용 - map 함수는 리턴 가능
                        return (
                            <div className="puppy-card">
                                <div>
                                    <img className="puppy-img" src={puppy.imageUrl} />
                                </div>
                                <div className="puppy-cont">
                                    <span className="puppy-name">{puppy.name}</span>
                                    <span className="puppy-status">{puppy.status} 놀아줭!!</span>
                                    <div className="puppy-seller">
                                        <img className="puppy-avatar" src="images/icons/avatar.png" alt="avatar" />
                                        <span>{puppy.seller}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div id="footer"></div>
        </div>
    );
}

export default MainPageComponent;
