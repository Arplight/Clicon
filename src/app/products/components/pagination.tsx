"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

const Pagination = ({ productsData }: { productsData: IProducts }) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const currentPage: string | null = searchParams.get("page");
  
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
        pageRangeDisplayed={8}
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
        forcePage={Number(currentPage || 0)}
      />
    </div>
  );
};

export default Pagination;
