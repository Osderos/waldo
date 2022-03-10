import { onSnapshot, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "./firebase";
import Gameboard from "./components/Gameboard";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "positions"), (snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  return <Gameboard items={items} />;
}

export default App;
