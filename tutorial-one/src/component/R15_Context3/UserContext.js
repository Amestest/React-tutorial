import React,{createContext} from "react";

// (Conext == 값, 설정을 저장하는 공간)

const userContext = createContext();

//외부에 import할 때 내보내줄 기본 값이 어떤 값인지 설정
export default userContext;