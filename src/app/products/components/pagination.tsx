"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  currentPage: number;
}
interface IPagination {
  currentPage: number;
  productsData: IProducts;
}
const Pagination: FC<IPagination> = ({ currentPage, productsData }) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  // URL handler
  const paginatedUrlHandler = (selectedPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", selectedPage.toString());

    const newURL = `${pathName}?${params.toString()}`;
    router.push(newURL);
  };

  // Pagination handlers
  const handlePageClick = ({ selected }: { selected: number }) => {
    paginatedUrlHandler(selected);
  };

  return (
    <div className="flex justify-center">
      {/* Pagination */}
      <ReactPaginate
        previousLabel={"<"}
        breakLabel="..."
        pageRangeDisplayed={10}
        marginPagesDisplayed={0}
        nextLabel={">"}
        pageCount={Math.ceil(productsData.total / 12)}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination-prev"}
        nextLinkClassName={"pagination-next"}
        disabledClassName={"pagination-disabled"}
        activeClassName={"pagination-active"}
        pageLinkClassName={"pagination-link"}
        pageClassName={"pagination-page"}
        forcePage={currentPage}
      />
    </div>
  );
};

export default Pagination;
