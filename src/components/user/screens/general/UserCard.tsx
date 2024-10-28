import { Box, Divider } from "@mui/material";
import ProfileImage from "../../userFields/ProfileImage";
import StyledUserCard from "../styled/UserCard.styled";
import BaseCard from "../../../UI/BaseCard/BaseCard";
import UserField from "../../userFields/UserField";
import { IUser } from "../../../../pages/User/types";
import { FC } from "react";

export interface IUserCardProps {
  user: IUser;
  onUpdate: (update: IUser) => void;
}

const UserCard: FC<IUserCardProps> = ({ user, onUpdate }) => {
  //   const [card, setCard] = useState<IUserCard>(user);

  const handleUpdate = (id: string, value: string) => {
    onUpdate({ ...user, userCard: { ...user.userCard, [id]: value } });
    //     setCard((prev) => {
    //       const updatedCard = { ...prev, [id]: value };
    //       onUpdate({ ...userTest, userCard: updatedCard });
    //       return updatedCard;
    //     });
  };
  //   console.log("123", userTest);
  return (
    <BaseCard>
      <StyledUserCard>
        <ProfileImage />
        <Box>
          <h2>{user?.userCard?.name}</h2>
          <Divider />
          <Box className="info">
            <Box>
              <UserField
                id="emailCard"
                isUserCard
                label="email"
                data={user?.userCard?.emailCard}
                onSave={handleUpdate}
              />
            </Box>

            <Box>
              <UserField
                id="role"
                type="select"
                options={[
                  { value: "Administrator", label: "Administrator" },
                  { value: "Moderator", label: "Moderator" },
                  { value: "Guest", label: "Guest" },
                ]}
                isUserCard
                data={user?.userCard?.role}
                onSave={handleUpdate}
              />
            </Box>
          </Box>
        </Box>
      </StyledUserCard>
    </BaseCard>
  );
};

export default UserCard;
