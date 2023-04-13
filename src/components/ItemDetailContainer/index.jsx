import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import styles from "./ItemDetail.module.css";
import { useEffect, useState } from "react";
import db from "../../../db/firebase-config";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  return <ItemDetail />;
};

export default ItemDetailContainer;
