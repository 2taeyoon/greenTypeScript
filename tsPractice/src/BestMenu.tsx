import React from "react";
import { Menu } from "./model/Cafe";

// interface bestProps extends Omit<Menu, "category">{
//   special: boolean;
// }
// 기존 Menu와 동일 -> extends를 이용해서 가져와서 사용, 추가도 가능

// type을 썼을 때
type bestProps = Omit<Menu, "category"> & {
    special: boolean;
}

// const BestMenu = ({ name, price, special }: bestProps) => {
const BestMenu: React.FC<bestProps> = ({ name, price, special }) => {
    return <div>{special && "*"} 베스트 메뉴 : {name} (₩{price})</div>;
};

export default BestMenu;
