import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import AboutPage from 'pages/AboutPage/AboutPage';
import TestsPage from 'pages/TestsPage';
import ArticlesPage from 'pages/ArticlesPage';
import UserPage from 'pages/UserPage/UserPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<AboutPage />} />
          <Route path="tests" element={<TestsPage />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="profile" element={<UserPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
