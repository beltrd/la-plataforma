// @ts-nocheck
import PocketBase from "pocketbase";

const amrcStudioService = new PocketBase("https://studio.amrcartstudio.com/");

const fetchAllProducts = async () => {
  const records = await amrcStudioService.collection("products").getFullList({
    sort: "-created",
  });

  return records.map((record) => {
    const images = record?.images?.map((image) =>
      amrcStudioService.getFileUrl(record, image)
    );

    const thumbnail = amrcStudioService.getFileUrl(record, record?.thumbnail);

    return {
      id: record.id,
      category: [record.category],
      discount: 0,
      fullDescription: record.description,
      name: record?.name,
      image: images,
      new: false,
      price: record?.price,
      rating: 5,
      saleCount: 0,
      shortDescription: record.description,
      sku: record?.sku,
      slug: record.id,
      tag: record?.tags,
      thumbImage: [thumbnail],
      stock: record.stock,
      variation: [
        {
          color: "black",
          colorCode: "#333333",
          image: images[0],
          size: [{ name: "x", stock: record.stock }],
          stock: record.stock,
        },
      ],
      version: 123,
    };
  });
};

const fetchProductById = async (id) => {
  const record = await amrcStudioService.collection("products").getOne(id, {});

  const images = record?.images?.map((image) =>
    amrcStudioService.getFileUrl(record, image)
  );

  return {
    id: record.id,
    category: [record.category],
    discount: 0,
    fullDescription: record.description,
    name: record?.name,
    image: images,
    new: false,
    price: record?.price,
    rating: 5,
    saleCount: 0,
    shortDescription: record.description,
    sku: record?.sku,
    slug: record.id,
    tag: record.tags,
    thumbImage: [images[0]],
    stock: record.stock,
    variation: [
      {
        color: "black",
        colorCode: "#333333",
        image: images[0],
        size: [{ name: "x", stock: record.stock }],
        stock: record.stock,
      },
    ],
    version: 123,
  };
};

export { fetchAllProducts, fetchProductById };

export default amrcStudioService;
