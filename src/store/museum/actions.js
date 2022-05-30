import axios from "axios";
import { startLoading, museumdataFetch, dataById } from "./slice";

const API_URL = `https://www.rijksmuseum.nl/api/nl/collection?key=KruyGss3&involvedMaker=Rembrandt+van+Rijn`;

export async function fetchMuseumData(dispatch, getstate) {
  try {
    dispatch(startLoading);
    const response = await axios.get(`${API_URL}`);
    const museum = response.data.artObjects;
    console.log(museum);
    dispatch(museumdataFetch(museum));
  } catch (e) {
    console.error(e);
  }
}

export async function fetchMuseumDataById(id, dispatch, getstate) {
  try {
    dispatch(startLoading);
    const response = await axios.get(`${API_URL}/arts/${id}`);
    const museum = response.data.artObjects;
    console.log(museum);
    dispatch(dataById(museum));
  } catch (e) {
    console.error(e);
  }
}
