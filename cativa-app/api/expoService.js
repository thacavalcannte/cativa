const BASE_URL = "http://192.168.18.9:3001";

export async function getExpos() {
  const res = await fetch(`${BASE_URL}/expos`);
  if (!res.ok) throw new Error("Erro ao buscar exposições");
  return res.json();
}

export async function getExpoById(id) {
  const res = await fetch(`${BASE_URL}/expos/${id}`);
  if (!res.ok) throw new Error("Erro ao buscar exposição");
  return res.json();
}
