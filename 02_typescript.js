// number, string, boolean, null, undefined
// any - 어떤 타입이 올지 모를 때 (위에 해당하지 않은 다른 모든 것들), ❗사용 자제
// void - any와 반대, 아무것도 없음
var a = 1004;
var b = "월요일"; // :string을 작성하지 않아도 type은 string으로 고정
// b = 1005; // ! 오류 - b는 number이므로 string 형식인 b에 할당할 수 없음
b = "1005";
var isLoading = false;
isLoading = true;
var c = 8;
c = "ㅎㅇ"; // 에러 ❌;
var d = "문자";
d = "1004";
// d = null; // ! 오류 - 'null' 형식은 'string | number' 형식에 할당할 수 없습니다
// 문자열 배열
var e = ["강아지", "고양이", "팬더"];
// e.push(1004); // ! 오류 - 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.
e.push("키위새");
// 함수
function sum(num1, num2) {
    return num1 + num2;
    // console.log(num1 + num2);
}
sum(5, 7);
console.log(sum(5, 7));
/*
  - ts -> js 컴파일
    $ npm install -g typescript
    $ tsc 파일명
    -> 이 방법은 es6 문법이 적용되지 않음

  - es6가 적용되도록 설정하는법
  $ tsc --init -> tsconfig.json 파일 생성
  - ctrl + shift + b -> tsconfig 빌드 클릭

  - 위의 방법이 오류난다면
  터미널-> 해당 폴더 위치 이동 -> tsc -p d:\front-end\typescript\tsconfig.json
*/
