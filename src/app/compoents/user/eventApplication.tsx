import Grid from "@mui/material/Grid2";
import Logout from "@/app/compoents/user/logout";
type EventApplicationProps = {
  children: React.ReactNode;
};

export default function EventApplication({ children }: EventApplicationProps) {
  return (
    <div>
      <Grid container direction="column" spacing={12}>
        <Grid size={{ md: 12, sm: 12, xl: 12 }}>
          <Logout />
        </Grid>
        <Grid size={{ md: 12, sm: 12, xl: 12 }}>{children}</Grid>
      </Grid>
    </div>
  );
}
