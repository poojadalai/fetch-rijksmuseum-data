import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
      <input placeholder="Search Here"></input>
      {!links.length
        ? "Loading"
        : links.map((link) => (
            <Link to={`/arts/${link.id}`}>
              <p>{link.title}</p>
            </Link>
          ))}
    </div>
  );
}
