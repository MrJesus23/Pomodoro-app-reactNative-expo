type Client = {
  id: number;
  nombre: string;
  email: string;
  fecha: string;
  ocupacion: string;
};

let clients: Client[] = [
  {
    id: 1,
    nombre: "Jesus",
    email: "jesus@email.com",
    fecha: "2026-03-23",
    ocupacion: "Estudiante",
  },
];

export const getClients = () => {
  return [...clients]; // Retorna una copia del array para evitar mutaciones externas
};

export const addClient = (client: any) => {
  const newClient: Client = {
    ...client,
    id: Date.now(), // Genera un ID único basado en la fecha actual :O
  };

  clients = [...clients, newClient];
};

export const deleteClient = (id: number) => {
  clients = clients.filter((client) => client.id !== id);
};

export const updateClient = (updatedClient: any) => {
  clients = clients.map(client =>
    client.id === updatedClient.id ? updatedClient : client
  )
};
