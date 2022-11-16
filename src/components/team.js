import React from "react";
import { useQuery } from "react-query";

function Team() {
  const fetchData = async () => {
    const res = await fetch("https://reqres.in/api/users");
    return res.json();
  };
  const { data } = useQuery("el", fetchData);
  let responseData = data;
  return (
    <div className="teams__container">
      {responseData &&
        responseData.data &&
        responseData.data.length &&
        responseData.data.map((el, key) => (
          <div className="teams__item">
            <img src={el.avatar} className="teams__image"></img>
            <div>
              <p>{`${el.first_name} ${el.last_name}`}</p>
              <p>{el.email}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Team;
