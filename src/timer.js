import React from 'react';

// **state를 사용하기 위해선 React 라이브러리의 `useState`를 사용하면 됩니다.**
// 1. useState 함수를 실행할 때 첫 번째 인자에 기본 값을 넣어줍니다.
// 2. useState함수를 실행하면 결과로 [state 값, state를 변경시키는 함수], 이렇게 2가지를 반환합니다.
// 3. 좌측에 state 값을 **time 변수**를 넣고, state 변경 함수를 setTime 변수에 넣습니다.
// 4. setTime 함수로 state를 업데이트 시키면 컴포넌트가 Re-Rendering(리 렌더링)됩니다.

// 그래서 React에서는 렌더링하는 것을 제어할 수 있는 장치로 `useEffect` 라는 메소드를 제공해줍니다.
// `useEffect(function, [ 모니터링 대상])` 의 형태로 사용합니다.
// **useEffect의 두 번째 인자에 들어가는 변수가 변경될 때마다 useEffect 안의 함수가 재실행됩니다.** 만일 값이 없다면 딱 한 번만 실행되고 더 이상 실행되지 않습니다.

// React에서 제공하는 useState, useEffect 같은 메소드를 Hook이라고 부릅니다.
function TimerComponent() {
    //1. time에는 기본 값으로 0이 들어갑니다. 신기해 보이는 문법은 ES6의 destructuring입니다 (위에서 언급함)
    const [time, setTimeTest] = React.useState(0);
    console.log('컴포넌트 업데이트 :: State 개념'); // time이 업데이트될 때마다 계속 호출됩니다.
    // function updateTime() {
    //     setTimeTest(time + 1);
    // }

    //2. useEffect의 두 번째 인자(배열)에 값이 없으면 딱 한 번만 로딩되고 실행되지 않습니다.
    React.useEffect(function () {
        setTimeTest(time + 1); //state를 바꿔서 또 렌더링이 되더라도 setTime은 호출되지 않습니다.
        console.log('컴포넌트가 화면에 처음 렌더링될 때 딱 한 번 실행됩니다.');
    }, []);

    return (
        <div>
            <h3>{time}초</h3>
            {/* 클릭할 때마다 setTime으로 state를 업데이트해줍니다. */}
            {/* <button onClick={updateTime}>1씩 올려주세요</button> */}
            <button>1씩 올려주세요</button>
        </div>
    );
}

export default TimerComponent;
