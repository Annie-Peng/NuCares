import { FC, useEffect, useState } from "react";
import { Auth } from "@/types/interface";
import { useOrderGetApiQuery } from "@/common/redux/service/order";
import { useDispatch } from "react-redux";
import { showLoading } from "@/common/redux/features/loading";

const Tabs = ["時間", "訂單編號", "營養師/課程名稱", "金額", "付款方案"];

interface OrderFormProps {
  auth: Auth;
}

interface OrderType {
  Title: string;
  CourseName: string;
  CoursePrice: number;
  OrderNumber: string;
  Date: string;
  PaymentMethod: string;
}

const OrderForm: FC<OrderFormProps> = ({ auth }) => {
  const { Token } = auth;
  const [showPage, setShowPage] = useState<Record<string, number>>({
    Current_page: 1,
    Total_pages: 1,
  });
  const dispatch = useDispatch();

  const prevPage = showPage.Current_page - 1;
  const nextPage = showPage.Current_page + 1;

  const [renderData, setRenderData] = useState<OrderType[] | null>(null);

  const { data, isLoading, error } = useOrderGetApiQuery({
    Token,
    PageId: showPage.Current_page,
  });

  useEffect(() => {
    if (isLoading) {
      dispatch(showLoading(true));
    }
    if (data) {
      dispatch(showLoading(false));
      setRenderData(data.Data);
      setShowPage(data.Pagination);
    }
    if (error) {
      console.log(error);
    }
  }, [data, error]);

  if (!renderData) return null;

  return (
    <div className="py-20 container lg:py-0 flex flex-col justify-between h-full">
      <h2 className="cusPrimaryTitle">訂單紀錄</h2>
      {/* 電腦版 */}
      <div className="hidden lg:block grow">
        <table className="w-full mt-24 py-20 px-10 bg-white rounded-15">
          <thead>
            <tr>
              {Tabs.map((tab, index) => (
                <th key={index} className="font-normal">
                  {tab}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {renderData.map((order) => {
              return (
                <tr key={order.OrderNumber}>
                  <td>{order.Date}</td>
                  <td>{order.OrderNumber}</td>
                  <td className="max-w-[200px]">
                    <h3 className="overflow-hidden whitespace-nowrap text-ellipsis">
                      <span className="border-b border-black-950">
                        {order.Title}/{order.CourseName}
                      </span>
                    </h3>
                  </td>
                  <td>NT$ {order.CoursePrice}</td>
                  <td>{order.PaymentMethod}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 手機版 */}
      <ul className="px-20 container flex flex-col gap-32 mt-32 lg:hidden">
        {renderData.map((order) => {
          return (
            <li
              key={order.OrderNumber}
              className="flex flex-col border border-primary-400 p-20 gap-8 rounded-5 text-14"
            >
              <h3 className="w-full overflow-hidden whitespace-nowrap text-ellipsis">
                <span className="font-bold text-16 border-b border-black-950 w-fit">
                  {order.Title}/{order.CourseName}
                </span>
              </h3>
              <p className="mt-4">訂單編號：{order.OrderNumber}</p>
              <p>成立時間：{order.Date}</p>
              <p>金額：NT$ {order.CoursePrice}</p>
              <p>付款方式：{order.PaymentMethod}</p>
            </li>
          );
        })}
      </ul>
      <nav className="mx-auto mt-20">
        <ul className="flex gap-8">
          <li className="py-6 px-16 rounded-[2px] border border-black-300 text-black-300 bg-white">
            <button
              type="button"
              onClick={() => {
                prevPage > 0 &&
                  setShowPage({ ...showPage, Current_page: prevPage });
              }}
            >
              {"<"}
            </button>
          </li>
          <li className="py-6 px-10 rounded-[2px] border border-primary-500 text-white bg-primary-300 bold text-14">
            {showPage.Current_page}
          </li>
          <li className="py-6 px-16 rounded-[2px] border border-black-300 text-black-300 bg-white">
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
    </div>
  );
};

export default OrderForm;
