import { Routes, Route } from "react-router-dom";
import Layout from "./views/Layout/Layout";
import Homepage from "./views/HomePage/Homepage";
import QuizPage from "./views/QuizPage/QuizPage";
import LeaderBoard from "./views/LeaderBoard/LeaderBoard";
const styles = {
  backgroundColor: '#f0f0f4',
  height: '100vh',
  width: '100%',
  'padding-top': '10px'
}
function App() {
  return (<div style={styles}><Routes>
    <Route path="/" element={<Layout ><Homepage /> </Layout>} />
    <Route path="/quiz" element={<Layout ><QuizPage /> </Layout>} />
    <Route path="/finish" element={<Layout ><LeaderBoard /> </Layout>} />
  </Routes></div>);
}

export default App;
