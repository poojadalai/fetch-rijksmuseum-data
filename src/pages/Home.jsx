import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMuseumData } from "../store/museum/actions";
import { selectMuseumData } from "../store/museum/selectors";

export default function Home() {
  const dispatch = useDispatch();

  const links = useSelector(selectMuseumData);

  useEffect(() => {
    dispatch(fetchMuseumData);
  }, [dispatch]);

  return (
    <div>
      {!links.length
        ? "Loading"
        : links.map((link) => <p key={link.id}>{link.title}</p>)}
    </div>
  );
}
