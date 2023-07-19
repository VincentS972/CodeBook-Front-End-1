import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Forum = () => {
  const navigate = useNavigate();
  const [Forum, setForum] = useState([]);

  const URL = `${process.env.REACT_APP_BACKEND_URI}/forum`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setForum(data);
    };
    fetchData();
  }, [URL]);

  //deletes the current profile from database
  const handleDelete = async (e) => {
    const response = await fetch(URL, {
      method: "delete",
    });
    if (response.status !== 204) console.log("error");
    navigate("/");
  };

  const display = Forum.map((forum) => {
    return (
      <div key={forum._id}>
        <p>Question:{forum.Body}</p>
      </div>
    );
  });

  return <div>{display}</div>;
};

export default Forum;