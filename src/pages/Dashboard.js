import React from 'react';

function Dashboard() {
  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl">Your Notes</h1>
        <div>
          <button className="mr-4">Login</button>
          <button>Signup</button>
        </div>
      </header>
      <div className="flex">
        <div className="w-1/3">
          <div className="bg-white p-4 rounded shadow mb-4">Note 1</div>
          <div className="bg-white p-4 rounded shadow mb-4">Note 2</div>
          <div className="bg-white p-4 rounded shadow mb-4">Note 3</div>
        </div>
        <div className="w-2/3 ml-4">
          <textarea className="w-full h-64 p-4 border border-gray-300 rounded" placeholder="Create New Note"></textarea>
          <button className="mt-4 bg-blue-500 text-white p-2 rounded">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;