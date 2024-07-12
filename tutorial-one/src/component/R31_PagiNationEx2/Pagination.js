import './Pagination.css'

const Pagination=({itemPerPage, totalItems, paginate, currentPage})=>{
    const 페이지번호들 = [];
    const totalPage = Math.ceil(totalItems / itemPerPage);
    for(let = 1; i <= totalPage; i ++){
        페이지번호들.push(i);
    }
    const renderPageNumber= () =>{
        if(totalPage <= 10){
             return 페이지번호들;
        }
    const startPage = Math.max(1, currentPage - 5);
    const endPage = Math.min(totalPage, currentPage + 4);
    return 페이지번호들.slice(startPage-1, endPage);
    }

    return(
       <nav>
            <ul className='pagination'>
            { currentPage >1 && (
                <li>
                <a onClick={() =>paginate(currentPage -5)} href="!#" className="page-link">
                &laquo;
                </a>
                </li>
               )}
               {renderPageNumber().map(번호=>(
                    <li key={번호} className={`page-item ${currentPage === 번호 ? 'active':''}`}>
                        <a onClick={() =>paginate(번호)} href="!#" className="page-link">
                            {번호}
                        </a>
                    </li>
                ))}
                { currentPage < totalPage && (
                <li>
                <a onClick={() =>paginate(currentPage + 5)} href="!#" className="page-link">
                &raquo;
                </a>
                </li>
               )}
            </ul>
       </nav> 
    )


}