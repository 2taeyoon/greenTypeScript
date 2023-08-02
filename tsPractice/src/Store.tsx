import React from "react";
import { Address, Cafe } from "./model/Cafe";

interface storeProps {
    info: Cafe;
    changeAddress(address: Address): void;
}
// Store에서만 쓰이는 type 설정

// const Store: React.FC<storeProps> = ({ info }) => {
const Store = ({ info }: storeProps) => {
    return (
        <div>
            <h1>Store : {info.name}</h1>
            <p>
                {info.address.city}, {info.address.detail}
            </p>
        </div>
    );
};

export default Store;
