// let data = {
//   name: "핑크 디저트",
//   category: "dessert",
//   address: {
//     city: "서울",
//     detail: "강남구 테헤란로 480",
//     zipCode: 523658,
//   },
//   menu: [
//     { name: "크로플", price: 3000, category: "MEALS" },
//     { name: "아메리카노", price: 2000, category: "DRINK" },
//     { name: "카페라떼", price: 3000, category: "DRINK" },
//   ],
// };

export type bestProps = {
    name: string;
    category: string;
    price: number;
};

// 오브젝트에 타입을 설정할 때는 interface / type
export type Cafe = {
    name: string;
    category: string;
    address: Address;
    // address: {
    //   city: string,
    //   detail: string,
    //   zipCode: number,
    // },
    menu: Menu[];
};

export type Address = {
    city: string;
    detail: string;
    zipCode?: number; // ? : 있을 수도 있고 없을 수도 있음 - Omit 대신 사용할 수 있음. 사용할 때 조심!
};

export type Menu = {
    name: string;
    price: number;
    category: string;
};

// type은 interface와 달리 요소 하나를 빼주는 기능이 있음
export type AddressWithoutZipcode = Omit<Address, "zipcode">;

// 외부 API - 들어올 타입을 모름
export type ApiResponse<T> = {
    data: T[];
    totalpage: number;
    page: number;
};
