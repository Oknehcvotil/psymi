
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import About from 'pages/About';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
