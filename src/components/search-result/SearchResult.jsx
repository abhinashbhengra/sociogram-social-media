import { useNavigate } from "react-router-dom";

export const SearchResult = ({ user }) => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <img src={user.avatorProfile} alt="" />
        <p>{user.fullName}</p>
      </div>
    </>
  );
};
