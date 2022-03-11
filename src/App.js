import { onSnapshot, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "./firebase";
import Gameboard from "./components/Gameboard";
import { getImages, getMainImage } from "./utils/getImages";

function App() {
  const [items, setItems] = useState([]);
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "positions"), (snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      setImages(await getImages(3, 1));
    };

    const loadMainImage = async () => {
      setMainImage(await getMainImage(1));
    };

    loadImages();
    loadMainImage();
  }, []);

  const removeItemFromList = (isTrue, itemName) => {
    if (isTrue) {
      const removedItems = items.filter((item) => item.name !== itemName);
      setItems(removedItems);
    }
    return null;
  };

  return (
    <Gameboard
      items={items}
      images={images}
      mainImage={mainImage}
      removeItemFromList={removeItemFromList}
    />
  );
}

export default App;
