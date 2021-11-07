import axios from "axios";
import {getUser} from "./security";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_HOST
});

export async function add(data,newComent,setComents){

    const request = {
        description : newComent.coment
    };
    if(request.description.length < 10){
        alert('Atenção!!\nA Quantidade minima de caracteres precisa ser no minimo 10');
        return false;
    }

    try {
        const response = await api.post(`/questions/${data.id}/answers`, request, {
            headers: {
                "Content-type": "application/json"
            }
        });
        alert("Comentário Postado com Sucesso!");
        const Answer = {id: response.data.id, description: response.data.description, created_at: response.data.createdAt, Student: getUser()}
        data.Answers.push(Answer);
        setComents({description: ""});


    } catch (error) {
        console.error(error);
        alert(error);
    }
}
