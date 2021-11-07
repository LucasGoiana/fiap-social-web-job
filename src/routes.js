import { BrowserRouter, Route, Switch } from "react-router-dom";
import Feed from "./pages/Feed";
import NewPost from "./pages/NewPost";
import NewImage from "./pages/NewImage";

function Router() {


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Feed />
                </Route>
                <Route path="/new-post">
                    <NewPost />
                </Route>
                <Route path="/new-image">
                    <NewImage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;