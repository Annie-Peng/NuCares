import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState, Dispatch, SetStateAction } from "react";

interface JSXPaginationProps {
  showPage: Record<string, number>;
  setShowPage: Dispatch<SetStateAction<Record<string, number>>>;
  prevPage: number;
  nextPage: number;
  url: string;
}

interface UsePaginationProps {
  pagination: {
    Current_page: number;
    Total_pages: number;
  };
  url: string;
}

const JSXPagination: FC<JSXPaginationProps> = ({
  showPage,
  setShowPage,
  prevPage,
  nextPage,
  url,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= showPage.Total_pages; i++) {
    pageNumbers.push(i);
  }
  const router = useRouter();

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
              if (prevPage > 0) {
                setShowPage({ ...showPage, Current_page: prevPage });
                router.push(`${url}${prevPage}`, undefined, { shallow: false });
              }
            }}
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
            <Link href={`${url}${number}`}>
              <button
                type="button"
                onClick={() =>
                  setShowPage({ ...showPage, Current_page: number })
                }
              >
                {number}
              </button>
            </Link>
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
                router.push(`${url}${nextPage}`, undefined, {
                  shallow: false,
                });
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

const usePagination = ({ pagination, url }: UsePaginationProps) => {
  const [showPage, setShowPage] = useState<Record<string, number>>({
    Current_page: pagination.Current_page,
    Total_pages: pagination.Total_pages,
  });

  const prevPage = showPage.Current_page - 1;
  const nextPage = showPage.Current_page + 1;

  const renderPaginationData = (
    <JSXPagination
      showPage={showPage}
      setShowPage={setShowPage}
      prevPage={prevPage}
      nextPage={nextPage}
      url={url}
    />
  );

  return { showPage, setShowPage, renderPaginationData };
};

export default usePagination;
