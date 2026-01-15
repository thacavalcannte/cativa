const BASE_URL = "http://192.168.18.9:3001"; 
// ↑ SERVIDOR (json-server): use o IP do PC, NÃO localhost

export async function getEvents() {
  // SERVIDOR: busca lista de eventos
  const res = await fetch(`${BASE_URL}/events?_sort=id&_order=desc`);
  if (!res.ok) throw new Error("Falha ao buscar eventos");
  return res.json();
}

export async function getEventById(id) {
  const res = await fetch(`${BASE_URL}/events/${id}`);
  if (!res.ok) throw new Error(`Falha ao buscar evento id=${id}`);
  return res.json();
}
