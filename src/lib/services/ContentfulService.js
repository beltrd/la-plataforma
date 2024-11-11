// @ts-nocheck
import { ContentfulService } from "../../services";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export const getFeaturedProducts = async () => {
  const data = await ContentfulService.getContentfulByNameQuery(
    "homePage",
    "mcuR3vL6R1s0dj5bYmNhu",
    `
    title
    banner: bannerCollection(limit: 2) {
      items {
        title
        description
        url
      }
    }
    description
    featuredProduct {
      title
      shortDescription
      handle
      price
      thumbnail {
        title
        url
      }
    }
    parallaxTop {
      title
      description
      url
    }
    showcase: showcaseCollection(limit: 8) {
      items {
        sys {
          id
        }
        title
        price
        inStock
        primaryColour
        handle
        thumbnail {
          title
          url
        }
      }
    }
    parallaxBottom {
      title
      description
      url
    }
    sectionTitle
    sectionDescription
    sectionShowcase: sectionShowcaseCollection(limit: 8) {
      items {
        sys {
          id
        }
        title
        url
      }
    }
    instagramHandle
    instagramShowcase: instagramShowcaseCollection(limit: 4) {
      items {
        sys {
          id
        }
        title
        description
        url
      }
    }
    `,
    true
  );

  return data?.homePage;
};

export const getProductByHandle = async (handle) => {
  const data = await ContentfulService.getContentfulByQuery(
    "productCollection",
    `{handle: "${handle}"}`,
    `
    items {
      sys {
        id
        publishedVersion
      }
      title
      sku
      description {
        json
      }
      shortDescription
      price
      inStock
      primaryColour
      discount
      handle
      new
      media: mediaCollection(limit: 5) {
        images: items {
          sys {
            id
          }
          title
          description
          url
          width
          height
        }
      }
      thumbnail {
        sys {
          id
        }
        title
        description
        url
        width
        height
      }
    }
    `,
    1,
    true
  ).catch((err) =>
    console.error("Error fetching contentful data from handle.", err)
  );
  return data?.productCollection?.items[0];
};

export const getProductsHandle = async () => {
  const queryName = "productCollection";
  const innerQuery = null;
  const queryData = `
  items {
    sys {
      id
      publishedVersion
    }
    handle
  }
  `;

  const data = await ContentfulService.getContentfulByQuery(
    queryName,
    innerQuery,
    queryData,
    50,
    true
  ).catch((err) =>
    console.error("Error fetching contentful products handles.", err)
  );

  return data?.productCollection?.items;
};

export const getAllProducts = async () => {
  const data = await ContentfulService.getContentfulByQuery(
    "productCollection",
    `{featured: false}`,
    `
    items {
      sys {
        id
        publishedVersion
      }
      title
      sku
      description {
        json
      }
      shortDescription
      price
      inStock
      primaryColour
      discount
      handle
      new
      media: mediaCollection(limit: 5) {
        images: items {
          sys {
            id
          }
          title
          description
          url
          width
          height
        }
      }
      thumbnail {
        sys {
          id
        }
        title
        description
        url
        width
        height
      }
      thumbnail {
        url
      }
    }
    `,
    100,
    false
  ).catch((err) =>
    console.error("Error fetching contentful data from handle.", err)
  );

  const products = data?.productCollection?.items.map((product) => ({
    id: product?.sys?.id,
    category: [],
    discount: 0,
    fullDescription: documentToHtmlString(product?.fullDescription?.json),
    name: product?.title,
    image: product?.media?.images?.map((image) => image?.url),
    new: product?.new,
    price: product?.price,
    rating: 5,
    saleCount: 0,
    shortDescription: product?.shortDescription,
    sku: product?.sku,
    slug: product?.handle,
    tag: [],
    thumbImage: [product?.thumbnail?.url],
    stock: product?.inStock ? 1 : 0,
    variation: [
      {
        color: "black",
        colorCode: "#333333",
        image: product?.thumbnail?.url,
        size: [{ name: "x", stock: product?.inStock ? 1 : 0 }],
        stock: product?.inStock,
      },
    ],
    version: 123,
  }));

  //     category: ["decor"]
  // discount: 10
  // fullDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  // id: "1"
  // image: (5) ["/assets/images/product/decor/1.jpg", "/assets/images/product/decor/2.jpg", "/assets/images/product/decor/3.jpg", "/assets/images/product/decor/4.jpg", "/assets/images/product/decor/5.jpg"]
  // name: "Lorem ipsum decor one"
  // new: true
  // price: 17
  // rating: 4
  // ratingCount: 5
  // saleCount: 90
  // shortDescription: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
  // sku: "asdf101"
  // slug: "lorem-ipsum-decor-one"
  // tag: ["decor"]
  // thumbImage: (2) ["/assets/images/product/decor/1.jpg", "/assets/images/product/decor/2.jpg"]
  // variation: (3) [{…}, {…}, {…}]
  return products;
};
