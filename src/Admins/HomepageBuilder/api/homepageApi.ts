import axios from "axios";

const API = "/api/admin/homepage";

export const getHomepageSections = () =>
    axios.get(`${API}/sections`);

export const getHomepageSection = (id:number) =>
    axios.get(`${API}/sections/${id}`);

export const createHomepageSection = (data:any) =>
    axios.post(`${API}/sections`,data);

export const updateHomepageSection = (id:number,data:any) =>
    axios.put(`${API}/sections/${id}`,data);

export const deleteHomepageSection = (id:number) =>
    axios.delete(`${API}/sections/${id}`);

export const enableHomepageSection = (id:number) =>
    axios.patch(`${API}/sections/${id}/enable`);

export const disableHomepageSection = (id:number) =>
    axios.patch(`${API}/sections/${id}/disable`);

export const reorderHomepageSections=(orderedSectionIds:number[]) =>
    axios.put(`${API}/reorder`,{
        orderedSectionIds
    });