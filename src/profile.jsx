import dp from "./assets/dp.jpg";

export const Profile = () => {
  return (
    <div className="profile_container">
      <div className="profile-con-top">
        <img src={dp} className="profile-image" alt="display" />
        <p>I love to build interesting things....this is one of them</p>
      </div>
      <div className="profile-con-bottom"></div>
    </div>
  );
};
