import React, { Suspense, lazy } from "react";

import { ErrorBoundary } from "../components/tasks/ErrorBoundary";
const Header = lazy(() =>
  import(/* webpackChunkName: "header" */ "../components/tasks/Header")
);
const Footer = lazy(() =>
  import(/* webpackChunkName: "footer" */ "../components/tasks/Footer")
);

const DefaultImportDemo = lazy(() =>
  import("../components/tasks/DefaultImportDemo")
);

const ErrorHandlingDemo = lazy(() =>
  import("../components/tasks/ErrorBoundary")
);

const DynamicImportDemo = lazy(() =>
  import("../components/tasks/DynamicImportDemo")
);
const FunctionImportDemo = lazy(() =>
  import("../components/tasks/FunctionImportDemo")
);

const HomePage = () => {
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<p>Loading Header...</p>}>
          <Header />
        </Suspense>

 

        <Suspense fallback={<p>Loading Footer...</p>}>
          <Footer />
        </Suspense>

        <Suspense fallback={<p>Loading DefaultImportDemo...</p>}>
          <DefaultImportDemo />
        </Suspense>

        <Suspense fallback={<p>Loading ErrorHandlingDemo...</p>}>
          <ErrorBoundary />
        </Suspense>

        <Suspense fallback={<p>Loading FunctionImportDemo...</p>}>
          <FunctionImportDemo />
        </Suspense>

        <Suspense fallback={<p>Loading DynamicImportDemo...</p>}>
          <DynamicImportDemo />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default HomePage;
