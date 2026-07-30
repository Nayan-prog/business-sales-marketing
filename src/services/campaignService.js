import api from "../api/axios";

export const getCampaigns = async () => {
  const response = await api.get("campaigns/");
  return response.data;
};

export const createCampaign = async (campaign) => {
  const response = await api.post("campaigns/create/", campaign);
  return response.data;
};

export const updateCampaign = async (id, campaign) => {
  const response = await api.put(`campaigns/update/${id}/`, campaign);
  return response.data;
};

export const deleteCampaign = async (id) => {
  const response = await api.delete(`campaigns/delete/${id}/`);
  return response.data;
};