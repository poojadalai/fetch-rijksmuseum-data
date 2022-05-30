import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMuseumData } from "../store/museum/actions";
import { selectMuseumData } from "../store/museum/selectors";

export default function Home() {
  const dispatch = useDispatch();

  const posts = useSelector(selectMuseumData);

  useEffect(() => {
    dispatch(fetchMuseumData);
  }, [dispatch]);

  return (
    <div>
      {
        !posts.length ? "Loading" : posts.map((post) => <p key={post.id}>{post.title}</p>) //you can expand this
      }
    </div>
  );
}
