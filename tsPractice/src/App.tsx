import React, { useState } from "react";
import "./App.css";
import { Address, Cafe } from "./model/Cafe";
import Store from "./Store";
import BestMenu from "./BestMenu";

let data: Cafe = {
    // type 적용
    name: "핑크 디저트",
    category: "dessert",
    address: {
        city: "서울",
        detail: "강남구 테헤란로 480",
        zipCode: 523658,
    },
    menu: [
        { name: "크로플", price: 3000, category: "MEALS" },
        { name: "아메리카노", price: 2000, category: "DRINK" },
        { name: "카페라떼", price: 3000, category: "DRINK" },
    ],
};

// :React.FC - react에서 함수 컴포넌트 타입에 지정. 요즘은 안 쓰는 것을 권장
const App: React.FC = () => {
    const [myCafe, setMyCafe] = useState<Cafe>(data);
    // 제네릭 문법으로 type 설정, 무엇을 넣어줄지 모름. 사용시 정해줌

    // setMyCafe(4); // ! 'number' 형식의 인수는 'SetStateAction<Cafe>' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

    const changeAddress = (address: Address) => {
        setMyCafe({ ...myCafe, address: address });
    };

    return (
        <div className="App">
            <Store info={myCafe} changeAddress={changeAddress} />
            <BestMenu name="마카롱" price={4000} special={true} />
        </div>
    );
};

export default App;
