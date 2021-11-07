import { CardComent, CardPost } from "./styles";
import imgProfile from "../../assets/profile.png"
import { useState } from "react";
import { getUser } from "../../services/security";
import { format } from "date-fns";
import {add, api} from "../../services/api";

function Post({ data }) {

    let signedUser = getUser();

    const [newComent, setComents]  = useState({
        description: "",
        disabledComment:true
    });

    const handleComents = (e) => {
        setComents({disabledComment:disabledBtn(e)});
        setComents(prev => ({...prev, [e.target.name]: e.target.value }));
    }
    const [showComents, setShowComents] = useState(false);

    const toggleComents = () => setShowComents(!showComents);

    function disabledBtn(e) {
        if(e.target.value.length >= 10){
            return false;
        }
        return true;
    }

    return (
        <CardPost>
            <header>
                <img src={imgProfile} />
                <div>
                    <p>por {signedUser.studentId === data.Student.id ? "você" : data.Student.name}</p>
                    <span>em {format(new Date(data.created_at), "dd/MM/yyyy 'às' HH:mm")}</span>
                </div>
            </header>
            <main>
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>
                {data.image && <img src={data.image} alt="imagem do post" />}
                <footer>
                    {data.Categories.map(c => <p>{c.description}</p>)}
                </footer>
            </main>
            <footer>
                <h3 onClick={toggleComents}>
                    {
                        data.Answers.length === 0 ?
                            "Seja o primeiro a comentar" :
                            `${data.Answers.length} Comentário${data.Answers.length > 1 && "s"}`
                    }
                </h3>
                {showComents && (
                    <>
                        { data.Answers.map(newComent => <Coment newComent={newComent} />) }
                    </>
                )}
                <div>
                    <input placeholder="Comente este post" name="coment" onChange={handleComents}/>
                    <button  disabled={newComent.disabledComment} onClick={() => add(data,newComent,setComents)}>Enviar</button>
                </div>
            </footer>
        </CardPost>
    );
}

function Coment({newComent}) {
    return (
        <CardComent>
            <header>
                <img src={imgProfile} />
                <div>
                    <p>por {newComent.Student.name}</p>
                    <span>em {format(new Date(newComent.created_at), "dd/MM/yyyy 'às' HH:mm")}</span>
                </div>
            </header>
            <p>{newComent.description}</p>
        </CardComent>
    );
}

export default Post;