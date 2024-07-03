/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import noPhoto from "../../components/images/logo/user.svg";

const Notification = ({ hire, role, timeSince }) => {
  return (
    <ul className="absolute right-0 mt-2 w-96 bg-white shadow-lg rounded-md">
      <li className="block px-4 py-2 hover:bg-gray-200">
        {role === "recruiter" ? (
          <>
            {hire.length === 0
              ? "Belum ada pesan"
              : hire.map((item, index) => (
                  <div key={index} className="w-full border-y">
                    <div className="flex px-5 pt-5 gap-5">
                      <div className="w-1/4">
                        <img
                          className="rounded-[50%]"
                          src={item.worker_photo || noPhoto}
                        />
                      </div>
                      <div className="w-3/4">
                        <p className="font-medium text-sm leading-6">
                          You&apos;re hiring a job to {item.worker_name || `Someone`}, now
                          waiting for response.
                        </p>
                        <h3 className="font-normal text-sm my-2">
                          {timeSince(item.created_at)}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
          </>
        ) : (
          <>
            {hire.length === 0
              ? "Belum ada pesan"
              : hire.map((item, index) => (
                  <div key={index} className="w-full border-y border-hirejob-frost">
                    <div className="flex px-5 pt-5 gap-5">
                      <div className="w-1/4">
                        <img
                          className="rounded-[50%]"
                          src={item.recruiter_photo || noPhoto}
                        />
                      </div>
                      <div className="w-3/4">
                        <p className="font-medium text-sm leading-6 text-hirejob-dark">
                          A recruiter from {item.recruiter_company} has sent you a message about a{" "}
                          <span className="capitalize">{item.message_purpose}</span>.
                        </p>
                        <h3 className="font-normal text-sm text-hirejob-gray my-2">
                          {timeSince(item.created_at)}
                        </h3>
                      </div>
                    </div>
                    <NavLink to="/hirelist"><button> Pesan lainnya</button></NavLink>
                  </div>
                ))}
          </>
        )}
      </li>
    </ul>
  );
};

export default Notification;