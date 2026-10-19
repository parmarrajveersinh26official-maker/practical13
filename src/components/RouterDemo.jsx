import {
  HashRouter,
  MemoryRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function DemoPages() {
  return (
    <div className="space-y-4">
      <nav className="flex gap-4">
        <Link className="text-blue-600 underline" to="/">
          Home
        </Link>

        <Link className="text-blue-600 underline" to="/about">
          About
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<h3 className="text-xl font-bold">Home Page</h3>}
        />

        <Route
          path="/about"
          element={<h3 className="text-xl font-bold">About Page</h3>}
        />
      </Routes>
    </div>
  );
}

export function HashRouterDemo() {
  return (
    <section className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">HashRouter</h2>
      <p className="mb-4 text-gray-600">
        Navigation uses the URL hash.
      </p>

      <HashRouter>
        <DemoPages />
      </HashRouter>
    </section>
  );
}

export function MemoryRouterDemo() {
  return (
    <section className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">MemoryRouter</h2>
      <p className="mb-4 text-gray-600">
        Navigation is stored in memory rather than the browser URL.
      </p>

      <MemoryRouter initialEntries={["/"]}>
        <DemoPages />
      </MemoryRouter>
    </section>
  );
}

export default function RouterDemo() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 p-6">
      <h1 className="text-3xl font-bold">React Router Types</h1>

      <HashRouterDemo />
      <MemoryRouterDemo />
    </main>
  );
}