//Albums https://jsonplaceholder.typicode.com/photos

//이용해서 한 페이지에 이미지 5개씩 보이기

import React,{useEffect, useState} from 'react'
import Pagination from './Pagination';
import axios from 'axios'

const Album = () =>{
    //      사진들  페이지번호를 클릭할 때 들어갈 사진들
    const [photos, setPhotos] = useState([]);
    //      현재페이지(맨처음 1번 페이지 설정)    새로 누른 페이지 = 현재페이지
    const [currentPage, setCurrentPage] = useState(1);
    // 한 페이지당 5개씩 사진을 보겠다 설정
    const [itemPerPage] = useState(5);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res) =>{
            setPhotos(res.data);
        })
        .catch((error)=>{
            //alert(err + "error!!")
            console.error("사진 데이터를 가져오는데 실패했습니다.", error);
        });
    },[]);

    //페이지마다 처음가져오는 앨범 마지막에 가져오는 앨범 어디서부터어디까지 가져올 것인지 설정
    const lastPhoto = currentPage * itemPerPage;// 현재페이지 * 한페이지당 보여줄 사진 개수
    const firstPhoto = lastPhoto - itemPerPage;
    const currentPhotos = photos.slice(firstPhoto, lastPhoto);

    // 페이지 변경 처리
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

   
    return(
        <>
        <h1>사진첩</h1>
        {currentPhotos.map((photo) => (
            <div key={photo.id}>
                <img src={photo.thumbnailUrl}/>
            </div>
        ))}
        <Pagination
                itemPerPage={itemPerPage}
                totalItems={photos.length}
                paginate={paginate}
                currentPage={currentPage}/>
        </>
    )
}
export default Album;