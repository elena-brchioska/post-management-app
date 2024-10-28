import { Box } from "@mui/material";
import UserCard from "./UserCard";
import UserField from "../../userFields/UserField";
import Grid from "@mui/material/Grid2";
import { IUser } from "../../../../pages/User/types";
import { FC } from "react";

interface IGeneralUserProps {
  user: IUser;
  onUpdate: (update: IUser) => void;
}

const General: FC<IGeneralUserProps> = ({
  user,

  onUpdate,
}) => {
  const handleUpdate = (id: string, value: string) => {
    onUpdate({
      ...user,
      general: { ...user.general, [id]: value },
    });
  };

  return (
    <Box>
      <UserCard user={user} onUpdate={onUpdate} />
      <Box>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <UserField
              id="birthDate"
              type="date"
              label="Birth Date:"
              data={user?.general?.birthDate}
              onSave={handleUpdate}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <UserField
              id="jobTitle"
              label="Job Title:"
              data={user.general.jobTitle}
              onSave={handleUpdate}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <UserField
              id="gender"
              type="radio"
              options={[
                { value: "Female", label: "Female" },
                { value: "Male", label: "Male" },
                { value: "Other", label: "Other" },
              ]}
              label="Gender:"
              data={user.general.gender}
              onSave={handleUpdate}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <UserField
              id="company"
              label="Company:"
              data={user.general.company}
              onSave={handleUpdate}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default General;
