import './index.css';
import { Button, Divider, Form, Input, InputNumber } from 'antd';
import { CameraOutlined } from '@ant-design/icons';

function UploadPage() {
    // 서버에 요청할거에요~
    // const onSubmit = funcion(values) {
    const onSubmit = (values) => {
        // es6의 람다 함수
        console.log('..... UploadPage :: onSubmit [values]', values);
    };
    return (
        <div id="upload-container">
            <h1 className="tit-page">퍼피 업로드 페이지 에요!</h1>
            <Form name="퍼피 업로드" onFinish={onSubmit}>
                {/* name은 onSubmit에 들어가는 key값이 될거에요~ */}
                <Form.Item name="upload" label={<div className="upload-label">강아지 사진</div>}>
                    <div id="upload-img-placeholder">
                        <CameraOutlined style={{ color: '#ccc' }} />
                        {/* <img src="/images/icons/camera.png" /> */}
                        <span>이미지를 업로드 해주세요.</span>
                    </div>
                </Form.Item>
                {/* 영역들을 나눠주려고 선을 그어주기 위한 antd 컴포넌트 */}

                <Divider />

                {/* rules를 정해야하는데 배열을 넣어줘야하고 안에 객체를 넣어줄 수 있어요 */}
                {/* required: true 이면, 꼭 입력해야하는 값이고, 입력하지 않았을때 오류멘트 노출 */}
                <Form.Item name="seller" label={<div className="upload-label">판매자 강아지</div>} rules={[{ required: true, message: '판매자 강아지를 입력해 주세요.' }]}>
                    <Input className="upload-name" size="large" placeholder="판매자 강아지를 입력해 주세요." />
                </Form.Item>

                <Divider />

                <Form.Item name="name" label={<div className="upload-label">강아지 이름</div>} rules={[{ required: true, message: '강아지 이름을 입력해 주세요.' }]}>
                    <Input className="upload-name" size="large" placeholder="강아지 이름을 입력해 주세요." />
                </Form.Item>

                <Divider />

                <Form.Item name="status" label={<div className="upload-label">강아지 상태</div>} rules={[{ required: true, message: '강아지 상태를 입력해 주세요.' }]}>
                    <InputNumber defaultValue={0} className="upload-status" size="large" />
                </Form.Item>

                <Divider />

                <Form.Item name="description" label={<div className="upload-label">강아지 소개</div>} rules={[{ required: true, message: '귀요미 강아지를 소개해 주세요.' }]}>
                    <Input.TextArea id="upload-description" size="large" placeholder="귀요미 강아지를 소개를 적어주세요." showCount maxLength={300} />
                </Form.Item>

                <Form.Item>
                    <Button id="submit-button" size="large" htmlType="submit">
                        강아지 등록하기
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default UploadPage;
