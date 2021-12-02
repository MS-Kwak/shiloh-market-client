import logo from './logo.svg';
import './App.css';
import ChildComponent from './child.js';
import TimerComponent from './timer.js';
// import TimerComponent from './timer'; js가 없어도 인지함.

function App() {
    const text = '내사랑 샤일로 누벨 언니 엄마 아빠가 너무 사랑해요!!';
    const text2 = '샤일로 사랑 누벨 사랑!';
    const sayHello = function () {
        return <h3>Home sweet home!!</h3>;
    };
    const sayHi = function () {
        return <h3>샤일로 누벨 행복 가득!!</h3>;
    };

    const myLove = function () {
        alert('내사랑 샤일로!!!!!!');
    };
    const myLovelyBaby = function () {
        alert('내사랑 샤일로야~!!!!');
    };
    return (
        //   <div className="App">
        //     <header className="App-header">
        //       <img src={logo} className="App-logo" alt="logo" />
        //       <p>
        //         Edit <code>src/App.js</code> and save to reload.
        //       </p>
        //       <a
        //         className="App-link"
        //         href="https://reactjs.org"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //       >
        //         Learn React
        //       </a>
        //     </header>
        //   </div>
        <div>
            <h1>안녕하세요~!</h1>
            <h2>{text2}</h2>
            <h2>{text}</h2>
            {sayHello()}
            {sayHi()}
            <div onClick={myLovelyBaby}>클릭해보시시시요~: myLovelyBaby</div>
            <div onClick={myLove}>클릭해보세용: myLove</div>
            <div
                onClick={function () {
                    alert('헬로~!!');
                }}
            >
                클릭: 헬로 얼러트!
            </div>
            <TimerComponent />
            {/* jsx 문법: 숫자는 {} 넣어줘야 함 */}
            <ChildComponent name="Shloh" age={10}></ChildComponent>
            <ChildComponent name="Nouvel" age={6}></ChildComponent>
        </div>
    );
}

export default App;
