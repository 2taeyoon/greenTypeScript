// number, string, boolean, null, undefined
// any - 어떤 타입이 올지 모를 때 (위에 해당하지 않은 다른 모든 것들), ❗사용 자제
// void - any와 반대, 아무것도 없음

const a: number = 1004;
let b: string = "월요일"; // :string을 작성하지 않아도 type은 string으로 고정
// b = 1005; // ! 오류 - b는 number이므로 string 형식인 b에 할당할 수 없음
b = "1005";

let isLoading: boolean = false;
isLoading = true;

let c: any = 8;
c = "ㅎㅇ"; // 에러 ❌;

let d: string | number = "문자";
d = "1004";
// d = null; // ! 오류 - 'null' 형식은 'string | number' 형식에 할당할 수 없습니다

// 문자열 배열
let e: string[] = ["강아지", "고양이", "팬더"];
// e.push(1004); // ! 오류 - 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.
e.push("키위새");

// 함수
function sum(num1: number, num2: number): number {
  return num1 + num2;
  // console.log(num1 + num2);
}
sum(5, 7);

console.log(sum(5, 7))

/*
  * ts -> js 컴파일
    1. $ npm install -g typescript
    2. $ tsc 파일명
    3. 컴파일 된 js 파일 생성
      -> 이 방법은 es6 문법이 적용되지 않음


  * ts -> js로 컴파일할 때 es6가 적용되도록 설정하는법
    1. $ tsc --init -> tsconfig.json 파일 생성

    2. tsconfig.json 파일 수정할 부분
      "target": "ES6",
      "lib": ["ES6", "DOM"],  

      "module": "commonjs",
      "rootDir": "./",  
      "outDir": "./dist",   

    3. ctrl + shift + b -> tsconfig 빌드 클릭


  * 만약 위의 방법이 오류난다면
    cmd -> 해당 폴더 위치 이동 -> tsc -p d:\front-end\typescript\tsconfig.json 작성
*/
