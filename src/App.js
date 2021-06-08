import { Route } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <div>
      {/* <Route path="/" component={ArticlePage} /> */}
      <Route path="/:category?" component={ArticlePage} />
    </div>
  );
}

export default App;
