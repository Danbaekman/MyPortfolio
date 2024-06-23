import React from 'react';
import { Element } from 'react-scroll';

const About = () => {
    return (
        <Element name="about" className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg mb-4">
                상상한 무궁무진한 아이디어를 제가 배운 기술로 구현해가는 과정이 재밌습니다.
                항상 새로운 시도를 두려워하지 않는 프론트엔드 개발자가 되겠습니다.
            </p>
            <p className="text-lg mb-4">
                “smooth waters run deep” 제가 가장 좋아하는 영어 격언 입니다.
                거칠고 빠르게 지나가는 물보다 잔잔하게 오랫동안 깊이 있게 흐르는 물처럼 꾸준히 공부하고,
                계속 해서 나아갈 자신이 있습니다. 성실하게 쌓은 지식으로, 회사에 실질적인 도움이 되는
                프론트엔드 개발자로 일하고 싶습니다.
            </p>
        </Element>
    );
};

export default About;
