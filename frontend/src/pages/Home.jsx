import React from "react";
import profile_pic from "../assets/assets_frontend/profile_pic.png";

const Home = ({ user }) => {
  return (
    <div className="bg-primary rounded-lg px-6 md:px-10 lg:px-20 text-white p-5">
      <div className="flex flex-row">
        <div>
          <img className="rounded-full" src={profile_pic} alt="Profile" />
        </div>

        <div className="flex flex-col gap-4 p-10">
          <p className="text-3xl font-medium leading-tight">{user.name}</p>
          <div className="flex flex-row gap-4">
            <p className="items-start">{user.email}</p>
            <p>{user.degree}</p>
            <p>
              <span className="font-medium">Batch:</span> {user.batch}
            </p>
          </div>
          <p>
            <span className="font-medium">College:</span> {user.college}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;