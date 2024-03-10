import { Route, Switch } from "wouter";
import { BookList } from "./screens/BookList";
import { BookView } from "./screens/BookView";

const Router = () => {
  return (
    <>
      <header>
        <h1 className="page-title">NYT Best Sellers</h1>
      </header>
      <main className="main">
        <Switch>
          <Route path="/">
            <BookList />
          </Route>
          <Route path="/books/:id">
            {(params) => <BookView id={params.id} />}
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default Router;
