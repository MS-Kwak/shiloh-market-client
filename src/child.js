//자식 컴포넌트 (ChildComponent.js)
//부모 컴포넌트에서 전달해주는 Prop 값은 컴포넌트 함수의 첫 번째 인자에 전부 들어갑니다.
function ChildComponent(props) {
    const { name, age } = props;
    // const name = props.name;
    // const age = props.age;
    return (
        <div>
            <p>
                내 이름은 {name} 이고, {age} 살 입니당!
            </p>
        </div>
    );
}

export default ChildComponent;
