import { lazy, Suspense } from "react";

const SettingsPage = lazy(() => import("./pages/SettingsPage"));

export default function App() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<p>Loading settings...</p>}>
        <SettingsPage />
      </Suspense>
    </div>
  );
}
