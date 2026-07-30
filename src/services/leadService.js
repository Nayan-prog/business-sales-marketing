import api from "../api/axios";

export const getLeads = async () => {
  const response = await api.get("leads/");
  return response.data;
};

export const createLead = async (lead) => {
  const response = await api.post("leads/create/", lead);
  return response.data;
};

export const updateLead = async (id, lead) => {
  const response = await api.put(`leads/${id}/update/`, lead);
  return response.data;
};

export const deleteLead = async (id) => {
  const response = await api.delete(`leads/${id}/delete/`);
  return response.data;
};