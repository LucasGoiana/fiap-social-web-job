import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import { getUser } from "../../services/security";
import { api } from "../../services/api";
import {Container, FormNewPost} from "./style";
function NewImage() {
    const history = useHistory();


    const [isLoading, setIsLoading] = useState(false);

    const imageRef = useRef();
    console.log("Altura"+ imageRef.current?.height)
    console.log("Largura"+imageRef.current?.width)
    const [image, setImage] = useState(null);

    const handleImage = (e) => {
        let file, img;
        const _URL = window.URL || window.webkitURL;

        if (( file = e.target.files[0])) {
            img = new Image();
            let objectUrl = _URL.createObjectURL(file);
            img.onload = function() {
                if(this.width != this.height){
                    alert('Imagem inválida, por favor, selecione a imagem Quadrada!')
                    document.getElementById('file').value= '';
                    imageRef.current.src = "";
                    imageRef.current.style.display = "none";
                    return false;
                }
                _URL.revokeObjectURL(objectUrl);


            };
            img.src = objectUrl;
        }
        if (e.target.files[0]){
            imageRef.current.src = URL.createObjectURL(e.target.files[0]);
            imageRef.current.style.display = "flex";
        } else {
            imageRef.current.src = "";
            imageRef.current.style.display = "none";
        }

        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {

        console.log("sim")
        e.preventDefault();

        const data = new FormData();


        image && data.append("image", image);
        console.log(data);
        setIsLoading(true);
        const Student = getUser();
        try {
            await api.post("/students/"+Student.studentId+"/images", data, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            });
            alert('Imagem atualizada com sucesso!');

            history.goBack();
        } catch (error) {
            console.error(error);
            alert(error);
        } finally{
            setIsLoading(false);
        }
    }


    return (
        <Container>
            <Header />
            <FormNewPost onSubmit={handleSubmit}>
                <h1>Nova Imagem</h1>

                <input required  id='file' type="file" accept="image/*" onChange={handleImage}  />
                <img alt="Pré-visualização" ref={imageRef} />
                <button>Enviar</button>
            </FormNewPost>
        </Container>
    );
}

export default NewImage;