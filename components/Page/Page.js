import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import { PageWrapper } from "context/page";
import Head from "next/head";

export const Page = (props) => {
  console.log("PAGE PROPS: ", props);
  return (
    <PageWrapper
      value={{
        propertyFeatures: props.propertyFeatures,
        title: props.title,
        featuredImage: props.featuredImage,
      }}
    >
      <Head>
        <title>title not dynamic yet</title>
        <meta name="description" content="not dyanmic yet" />
      </Head>
      <MainMenu
        items={props.mainMenuItems}
        callToActionDestination={props.callToActionDestination}
        callToActionLabel={props.callToActionLabel}
      />
      <BlockRenderer blocks={props.blocks} />
    </PageWrapper>
  );
};
