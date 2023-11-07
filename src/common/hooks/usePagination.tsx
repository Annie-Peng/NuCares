import { FC, useState, Dispatch, SetStateAction } from "react";

interface JSXPaginationProps {
  showPage: Record<string, number>;
  setShowPage: Dispatch<SetStateAction<Record<string, number>>>;
  prevPage: number;
  nextPage: number;
}

const JSXPagination: FC<JSXPaginationProps> = ({
  showPage,
  setShowPage,
  prevPage,
  nextPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= showPage.Total_pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mx-auto mt-[36px]">
      <ul className="flex gap-8 justify-center">
        <li
          className={`py-6 px-16 rounded-[2px] border bg-white ${
            showPage.Current_page === 1
              ? "text-black-300 border-black-300"
              : "text-primary-500 border-primary-500"
          }`}
        >
          <button
            type="button"
            onClick={() => {
              prevPage > 0 &&
                setShowPage({ ...showPage, Current_page: prevPage });
            }}
            className=""
          >
            {"<"}
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`py-6 px-10 rounded-[2px] border border-primary-500 text-primary-500 ${
              showPage.Current_page === number
                ? "border-primary-500 text-white bg-primary-300"
                : "border-primary-500 text-black-300 bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => setShowPage({ ...showPage, Current_page: number })}
            >
              {number}
            </button>
          </li>
        ))}
        <li
          className={`py-6 px-16 rounded-[2px] border bg-white ${
            showPage.Current_page === showPage.Total_pages
              ? "text-black-300 border-black-300"
              : "text-primary-500 border-primary-500"
          }`}
        >
          <button
            type="button"
            onClick={() => {
              if (
                nextPage === showPage.Total_pages ||
                nextPage < showPage.Total_pages
              ) {
                setShowPage({ ...showPage, Current_page: nextPage });
              }
            }}
          >
            {">"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

const usePagination = () => {
  const [showPage, setShowPage] = useState<Record<string, number>>({
    Current_page: 1,
    Total_pages: 5,
  });

  const prevPage = showPage.Current_page - 1;
  const nextPage = showPage.Current_page + 1;

  const renderData = (
    <JSXPagination
      showPage={showPage}
      setShowPage={setShowPage}
      prevPage={prevPage}
      nextPage={nextPage}
    />
  );

  return { showPage, setShowPage, renderData };
};

export default usePagination;
