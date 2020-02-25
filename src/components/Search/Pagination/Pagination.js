import React from 'react'

const Pagination = ({postsPerPage, totalposts, paginate }) => {

   const pageNumbers = [];

    for(let i= 1; i<=Math.ceil(totalposts / postsPerPage); i++){
        pageNumbers.push(i)
    }
    console.log(pageNumbers)

    paginate()
    return (
        <nav>
            <ul className="pagination">
            {pageNumbers.map(number=>(
                <li key={number} className="page-item">
                    <a onClick={() => paginate(number)} href="!#" className="page-link">
                        {number}
                    </a>
                </li>
            ))}
            </ul>
        </nav>
    )
}
export default Pagination;