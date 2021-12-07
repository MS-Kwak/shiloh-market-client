import './App.css';
import MainPageComponent from './main/index.js';
// import MainPage from './main'; index.js는 생략가능
// {/* React에서 화면 이동을 돕는 라이브러리 */} Swich 와 Route 컴포넌트를 사용할거에요~
import { Switch, Route } from 'react-router-dom';
import UploadPage from './upload/index.js';
import PuppyPage from './puppies/index.js';

function App() {
    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="/images/icons/logo.png" alt="logo" />
                </div>
            </div>
            <div id="container">
                <Switch>
                    <Route exact={true} path="/">
                        <MainPageComponent></MainPageComponent>
                    </Route>
                    {/* Link 적용 각각의 상세페이지 이동 설정 */}
                    <Route exact={true} path="/puppies/:id">
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
