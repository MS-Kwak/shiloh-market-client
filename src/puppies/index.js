import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './index.css'; // 같은 경로에 있는 css 를 import 할때 from 적어주지 않아도 됨.

function PuppyPage() {
    // const params = useParams();
    // console.log('..... [params]', params);
    const { id } = useParams(); // es6문법의 destructure
    const [puppyData, setPuppy] = useState(null);
    // useEffect로 요청할때 한번만 호출할 수 있도록 라이프 사이클 조절해줍니다.
    useEffect(function () {
        // axios.get('https://71057566-4814-4374-bd4e-c5e359ff7d22.mock.pstmn.io/puppies'+id)
        axios
            .get(`https://71057566-4814-4374-bd4e-c5e359ff7d22.mock.pstmn.io/puppies/${id}`)
            .then(function (result) {
                console.log('[axios result]', result);
                setPuppy(result.data);
            })
            .catch(function (err) {
                console.log('에러발생 -----', err);
            });
    }, []);
    // console.log('[puppyData]', puppyData);
    if (puppyData === null) {
        return <h1>퍼피 페이지 {id}을 불러오고 있어요~~~~~</h1>;
    }

    return (
        <div>
            <h1 className="tit-page">퍼피 페이지 {id} 강아지 소개해요!</h1>
            <div id="image-box">
                <img src={'/' + puppyData.imageUrl} />
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png" />
                <span>{puppyData.seller}</span>
            </div>
            <div id="cont-box">
                <div id="name">{puppyData.name}</div>
                <div id="status">{puppyData.status} 놀아죵놀아죵!!</div>
                <div id="createdAt">2021년 12월 6일</div>
                <div id="description">{puppyData.description}</div>
            </div>
        </div>
    ); // React의 jsx 문법
}

export default PuppyPage;
