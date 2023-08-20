import useState from "react";
import axios from "axios";

const AddArticle = ({setData}) => {

  const [formData, setFormData] = useState({ title: '', content: '', author: 'Fatim Dicko'});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Requête POST pour ajouter un nouvel article
    axios.post('http://localhost:8080/articles', formData)
      .then((response) => {
        console.log('Article ajouté avec succès:', response.data);
        // Effectuez les actions nécessaires après avoir ajouté l'article avec succès

        // Rechargez les données après avoir ajouté l'article pour afficher les dernières modifications
        axios.get('http://localhost:8080/articles')
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error('Erreur lors de la récupération des données:', error);
          });
      })
      .catch((error) => {
        console.error('Erreur lors de l\'ajout de l\'article:', error);
        // Effectuez les actions nécessaires en cas d'erreur
      });
  };

    return <div>
        <h2>Ajouter un nouvel article :</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre :</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="content">Contenu :</label>
          <textarea id="content" name="content" value={formData.content} onChange={handleChange} rows='20' cols='90' autoCapitalize="sentences" />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
}

export default AddArticle;