import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import { getPageStaticProps } from "utils/getPageStaticProps";
import { Page } from "components/Page";

export default Page;

export const getStaticProps = getPageStaticProps;

/*export const getStaticProps = async () => {
    const {data} = await client.query({
        query: gql`
        query PageQuery {
            nodeByUri(uri:"/") {
                ... on Page {
                    id
                    title
                    blocksJSON
                }
            }
            acfOptionsMainMenu {
                  mainMenu {
                    menuItems {
                      menuItem {
                        destination {
                          ... on Page {
                            uri
                          }
                        }
                        label
                      }
                      items {
                        destination {
                          ... on Page {
                            uri
                          }
                        }
                        label
                      }
                    }
                  }
             }
        }
        `,
    });

    const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);
    console.log(blocks);
    return {
        props: {
            mainMenuItems: data.acfOptionsMainMenu.mainMenu.menuItems,
            blocks,
        }
    }
}
*/