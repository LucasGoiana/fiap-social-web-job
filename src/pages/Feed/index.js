import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Post from "../../components/Post";
import { api } from "../../services/api";
import { Container, FaButton } from "./styles";

function Feed() {

    const history = useHistory();

    const [isLoading, setIsLoading] = useState(false);

    const [posts, setPosts] = useState([]);

    const [page, setPage] = useState(1);

    const [totalPost, setTotalPost] = useState(0);

    const handleNavigateToNewPost = () => history.push("/new-post");

    const loadPosts = async () => {
        if(isLoading) return;

        if(totalPost > 0 && totalPost === posts.length.toString()) return;

        setIsLoading(true);
        try {
            const response = await api.get("/feed", {
                params: { page }
            });

            setPosts([...posts, ...response.data]);

            setPage(page + 1);

            setTotalPost(response.headers["x-total-count"]);
        } catch (error) {
            alert(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        loadPosts();
    }, []);

    const scrollObserver = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.target;

        if (scrollTop + clientHeight > scrollHeight - 100) {
            loadPosts();
        }
    }

    // if (isLoading) return <div>Carregando...</div>

    return (
        <Container onScroll={scrollObserver}>
            <Header />
            {posts.map(post => <Post data={post} />)}
            <FaButton onClick={handleNavigateToNewPost}>+</FaButton>
        </Container>
    );
}

export default Feed;