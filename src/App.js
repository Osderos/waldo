import { onSnapshot, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "./firebase";
import Gameboard from "./components/Gameboard";
import { getImages, getMainImage } from "./utils/getImages";

function App(props) {
  const [items, setItems] = useState([]);
  const [images, setImages] = useState([]);

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

    loadImages();
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
      mainImage={props.mainImage}
      removeItemFromList={removeItemFromList}
    />
  );
}

export default App;
