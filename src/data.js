import { useState, useEffect } from "react";
import axios from "axios";


 export const Data = () => {

    const [data, setData] = useState([]);

  useEffect(() => {
    // Requête GET pour récupérer des données
    axios.get('http://localhost:8080/articles')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);

  return data;
}
