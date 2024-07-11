import React,{useEffect, useState} from "react";


const Axios_Ex2 = () => {
    const [data,setData] = useState(null);

    useEffect (() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
                .then(res=>{
                    setData(res.data);
                })
                .catch(()=>{
                    alert("데이터를 가져오는데 실패했습니다.")
                });
    },[]);
    return(
        <>
        <h1>json안에 작성된 내용 가져오기</h1>
        <ul>
            {customElements.map(comment=>(
                    <li key={ }>
                        <strong>UserID : </strong>{ }<br/>
                        <strong>ID : </strong>{ }<br/>
                        <strong>Title : </strong>{ }<br/>
                        <strong>Completed : </strong>{ }<br/>



                    </li>

            ))}
        </ul>      
        </>
    )
}
export default Axios_Ex2;