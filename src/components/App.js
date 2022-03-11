import { onSnapshot, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "../firebase";
import Gameboard from "./Gameboard";
import { getImages, getMainImage } from "../utils/getImages";
import { UserContext } from "../utils/UserContext";
import Form from "./Form";

function App(props) {
  const [items, setItems] = useState([]);
  const [images, setImages] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [points, setPoints] = useState(0);

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

  const isGameOver = () => {
    if (items.length === 1) {
      setGameOver(true);
    }
  };

  const providerValue = {
    gameOver,
    setPoints,
  };

  return (
    <UserContext.Provider value={providerValue}>
      {gameOver ? <Form points={points} /> : null}
      <Gameboard
        items={items}
        images={images}
        mainImage={props.mainImage}
        removeItemFromList={removeItemFromList}
        isGameOver={isGameOver}
      />
    </UserContext.Provider>
  );
}

export default App;
