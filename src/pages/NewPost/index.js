import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Tag from "../../components/Tag";
import { api } from "../../services/api";
import { Container, FormNewPost } from "./styles";

function NewPost() {
    const history = useHistory();

    const [categories, setCategories] = useState([]);
    const [categoriesSel, setCategoriesSel] = useState([]);

    const [newPost, setNewPost] = useState({
        title: "",
        description: "",
        gist: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleInput = (e) => {
        setNewPost({ ...newPost, [e.target.id]: e.target.value });
    }

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const response = await api.get("/categories");

                setCategories(response.data);
            } catch (error) {
                console.error(error);
                alert("Ops, erro ao buscar as categorias");
            }
        }

        loadCategories();
    }, []);

    const imageRef = useRef();
    const [image, setImage] = useState(null);

    const handleImage = (e) => {
        if (e.target.files[0]) {
            imageRef.current.src = URL.createObjectURL(e.target.files[0]);
            imageRef.current.style.display = "flex";
        } else {
            imageRef.current.src = "";
            imageRef.current.style.display = "none";
        }

        setImage(e.target.files[0]);
    };

    const handleCategories = (e) => {
        const categorySelId = e.target.value;

        if (categoriesSel.find(c => c.id.toString() === categorySelId))
            return e.target.value = "";

        const categorySel = categories.find(
            category => category.id.toString() === categorySelId
        )

        setCategoriesSel([...categoriesSel, categorySel]);

        e.target.value = "";
    }

    const handleUnselCategory = (idUnsel) => {
        const categoriesAux = categoriesSel.filter(
            category => category.id !== idUnsel
        );

        setCategoriesSel(categoriesAux);
    }

    const handleSubmit = async (e) => {

        console.log("sim")
        e.preventDefault();

        if (categoriesSel.length === 0) 
            return alert("Selecione ao menos uma categoria");

        const data = new FormData();

        data.append("title", newPost.title);
        data.append("description", newPost.description);

        let categoriesIds = categoriesSel.map(c => c.id).join();

        data.append("categories", categoriesIds);

        newPost.gist && data.append("gist", newPost.gist);

        image && data.append("image", image);

        setIsLoading(true);

        try {
            await api.post("/questions", data, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            });

            history.goBack();
        } catch (error) {
            console.error(error);
            alert(error);
        } finally{
            setIsLoading(false);
        }
    }

    if(isLoading)
        return <div>Carregando...</div>

    return (
        <Container>
            <Header />
            <FormNewPost onSubmit={handleSubmit}>
                <h1>Nova postagem</h1>
                <Input
                    id="title"
                    label="Título"
                    minLength="5"
                    required
                    handler={handleInput}
                />
                <Input
                    id="description"
                    label="Descrição"
                    minLength="10"
                    required
                    handler={handleInput}
                />
                <Input
                    id="gist"
                    label="Gist"
                    minLength="20"
                    handler={handleInput}
                />
                <Select
                    id="categories"
                    label="Categorias"
                    handler={handleCategories}
                >
                    <option value="">Selecione</option>
                    {categories.map((category) =>
                        <option key={category.id} value={category.id}>
                            {category.description}
                        </option>
                    )}
                </Select>
                <div>
                    {categoriesSel.map(category =>
                        <Tag
                            key={category.id}
                            info={category.description}
                            handleClose={() => handleUnselCategory(category.id)}
                        ></Tag>
                    )}
                </div>
                <input type="file" accept="image/*" onChange={handleImage} />
                <img alt="Pré-visualização" ref={imageRef} />
                <button>Enviar</button>
            </FormNewPost>
        </Container>
    );
}

export default NewPost;