import { useParams } from 'react-router-dom';

function PuppyPage() {
    // const params = useParams();
    // console.log('..... [params]', params);

    const { id } = useParams(); // es6문법의 destructure

    return <h1>퍼피 페이지 {id} 강아지에욤~!</h1>;
}

export default PuppyPage;
