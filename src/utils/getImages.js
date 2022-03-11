import { getStorage, ref, getDownloadURL } from "firebase/storage";

export const getImages = async (number, level) => {
  const imagesPool = [];
  try {
    for (let i = 1; i <= number; i++) {
      const storage = getStorage();
      const referance = ref(
        storage,
        `/Level${level}/example${level}-item${i}.png`
      );
      await getDownloadURL(referance).then((x) => {
        imagesPool.push({ url: x, id: i });
      });
    }
  } catch (err) {
    console.log(err);
  }

  return imagesPool;
};

export const getMainImage = async (level) => {
  try {
    const storage = getStorage();
    const referance = ref(storage, `/Level${level}/example${level}.png`);
    const mainImage = await getDownloadURL(referance);
    return mainImage;
  } catch (err) {
    console.log(err);
  }
};

export const getLogo = async () => {
  try {
    const storage = getStorage();
    const referance = ref(storage, "/logo_size_invert.jpg");
    const logo = await getDownloadURL(referance);
    return logo;
  } catch (err) {
    console.log(err);
  }
};
