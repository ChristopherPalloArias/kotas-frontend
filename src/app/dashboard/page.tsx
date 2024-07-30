"use client";

import Sidebar from '../components/layout/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard!</p>
      </main>
    </div>
  );
}
