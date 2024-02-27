import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";

import { Catalog, BookProfilePage, BookCreate, BookEdit} from '../pages'
import { Layout } from "../layouts";
import { lazy } from "react";

const LazyHomePage = lazy(() => import('../pages/HomePage'));

export const Routing = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LazyHomePage />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="book">
          <Route index element={<Navigate to="/catalog" />} />
          <Route path=":id" element={<BookProfilePage />} />
          <Route path="create" element={<BookCreate />} />
          <Route path="edit/:id" element={<BookEdit />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
