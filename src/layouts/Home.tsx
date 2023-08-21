import React, { useState } from 'react';

interface Request {
  id: number;
  title: string;
  description: string;
}

const requests: Request[] = [
  { id: 1, title: 'Requisição 1', description: 'Detalhes da Requisição 1...' },
  { id: 2, title: 'Requisição 2', description: 'Detalhes da Requisição 2...' },
  { id: 3, title: 'Requisição 3', description: 'Detalhes da Requisição 3...' },
  // Adicione mais requisições aqui
];

export default function Home() {
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);

  const handleRequestClick = (request: Request) => {
    setSelectedRequest(request);
  };

  return (
    <div className="flex h-screen">
      <div className="w-8/12 border-r p-4">
        <h1 className="text-xl font-semibold mb-4">Lista de Requisições</h1>
        <ul>
          {requests.map((request) => (
            <li
              key={request.id}
              className={`cursor-pointer py-2 ${
                selectedRequest?.id === request.id ? 'bg-gray-200' : ''
              }`}
              onClick={() => handleRequestClick(request)}
            >
              {request.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-4/12 p-4">
        {selectedRequest ? (
          <div>
            <h1 className="text-xl font-semibold mb-2">Detalhes da Requisição</h1>
            <h2 className="text-lg font-medium mb-1">{selectedRequest.title}</h2>
            <p>{selectedRequest.description}</p>
          </div>
        ) : (
          <p>Selecione uma requisição para ver os detalhes.</p>
        )}
      </div>
    </div>
  );
};
