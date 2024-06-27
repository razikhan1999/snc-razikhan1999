import { User } from "@/utils/common/person";
import Image from "next/image";
import { FunctionComponent } from "react";

type PersonCardProps = {
  user: User;
};

const PersonCard: FunctionComponent<PersonCardProps> = ({ user }) => {
  const { profilePictureUrl, name, title } = user;

  return (
    <div className="border border-blue-300 shadow rounded-md p-6 max-w-sm w-full mx-auto">
      <div className="flex flex-col space-x-4">
        <Image
          src={profilePictureUrl}
          alt="Picture of the author"
          width={96}
          height={96}
          className="rounded-full border-2 h-24 w-24 border-gray-300 object-cover mx-auto"
        />
        <div className="flex-1 space-y-6 py-1 mt-3">
          <div className="space-y-3">
            <h3 className="text-center text-white m-0">{name}</h3>
            <h3 className="text-center text-slate-500 m-0">{title}</h3>
          </div>
          <div className="flex justify-center gap-3">
            <button>Add friend</button>
            <button>Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
