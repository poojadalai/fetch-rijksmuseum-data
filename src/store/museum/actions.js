import axios from "axios";
import { startLoading, museumdataFetch } from "./slice";

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
