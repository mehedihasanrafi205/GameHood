import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, UpdateUser, setUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdateUserInfo = (e) => {
    e.preventDefault();

    if (!name || !photo) {
      toast.error("Please fill all fields!");
      return;
    }

    UpdateUser({ displayName: name, photoURL: photo })
      .then(() => {
        toast.success(" Profile updated successfully!");
        setUser({ ...user, displayName: name, photoURL: photo });
        setIsEditing(false);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-[calc(100vh-397px)] flex items-center justify-center bg-linear-to-br my-5">
      <title>Profile | GameHood</title>

      <div className="w-[90%]  max-w-md bg-linear-to-br   from-[#0f0f0f] via-[#121212] to-[#191919] backdrop-blur-xl border border-[#B8FF00]/30 shadow-[0_0_25px_#B8FF00]/10 rounded-2xl p-8 relative z-10 shadow-lg hover:shadow-[0_0_10px_#B8FF00] transition-all duration-300">
        {!isEditing ? (
          <>
            <div className="flex flex-col items-center space-y-3">
              <img
                src={
                  user?.photoURL ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="Profile"
                className="w-24 h-24 rounded-full border-2 border-[#B8FF00]"
              />
              <h2 className="text-2xl font-bold text-[#B8FF00]">
                {user?.displayName || "Unknown User"}
              </h2>
              <p className="text-gray-400">{user?.email}</p>

              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 px-5 py-2 bg-[#B8FF00] hover:bg-[#a6e600] text-black font-semibold rounded-lg transition cursor-pointer"
              >
                Edit Profile
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-center mb-6 text-[#B8FF00]">
              Edit Profile
            </h1>
            <form onSubmit={handleUpdateUserInfo} className="space-y-5">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-[#B8FF00]"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Photo URL</label>
                <input
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-[#B8FF00] "
                  placeholder="Enter photo URL"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-[#B8FF00] hover:bg-[#a6e600] text-black font-semibold py-3 rounded-lg transition cursor-pointer"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
