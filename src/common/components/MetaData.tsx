import Head from "next/head";
import { FC } from "react";

interface MetaDataProps {
  title?: string;
  description?: string;
}

const MetaData: FC<MetaDataProps> = ({ title, description }) => {
  const defaultTitle = "NuCares | 營養師平台";
  const defaultDescription =
    "NuCares 提供專業的營養師諮詢服務，為您的健康生活量身打造，開啟美好人生！";

  return (
    <>
      <Head>
        <title>{title ? `${title} - ${defaultTitle}` : defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="hidden">{defaultTitle}</h1>
    </>
  );
};

export default MetaData;
