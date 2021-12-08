import 'antd/dist/antd.css';
import './App.css';
import MainPageComponent from './main/index.js';
// import MainPage from './main'; index.js는 생략가능
// {/* React에서 화면 이동을 돕는 라이브러리 */} Swich 와 Route 컴포넌트를 사용할거에요~
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import UploadPage from './upload/index.js';
import PuppyPage from './puppies/index.js';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function App() {
    // 페이지 이동
    const history = useHistory();

    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <Link to="/">
                        <img src="/images/icons/logo.png" alt="logo" />
                    </Link>
                    <Button
                        size="large"
                        onClick={function () {
                            // alert('업로드 클릭!!');
                            history.push('/upload');
                        }}
                        icon={<DownloadOutlined />}
                    >
                        퍼피업로드
                    </Button>
                </div>
            </div>
            <div id="container">
                <Switch>
                    <Route exact={true} path="/">
                        <MainPageComponent></MainPageComponent>
                    </Route>
                    {/* Link 적용 각각의 상세페이지 이동 설정 */}
                    <Route exact={true} path="/puppies:id">
                        <PuppyPage></PuppyPage>
                    </Route>
                    <Route exact={true} path="/upload">
                        <UploadPage></UploadPage>
                    </Route>
                </Switch>
            </div>
            <div id="footer"></div>
        </div>
    );
}

export default App;
