import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks/redux";
import { personInfo } from "../../store/reducers/PeopleSelectors";
import { Button } from "@mui/material";
import styles from "./HumanPageStyles.module.scss";

const HumanPage: React.FC = () => {
  const navigate = useNavigate();

  const { person } = useAppSelector((state) => state.personReducer);
  const personFullInfo = useAppSelector((state) => personInfo(state, person));

  return (
    <div>
      <div className={styles.button}>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>
      <Card className={styles.card} variant="outlined">
        <CardContent className={styles.cardContent}>
          <Typography className={styles.label} variant="h3">
            {personFullInfo?.name}
          </Typography>
          <Typography className={styles.label}>
            gender: {personFullInfo?.gender}
          </Typography>
          <Typography className={styles.label}>
            birth year: {personFullInfo?.birth_year}
          </Typography>
          <Typography className={styles.label}>
            eye color: {personFullInfo?.eye_color}
          </Typography>
          <Typography className={styles.label}>
            hair color: {personFullInfo?.hair_color}
          </Typography>
          <Typography className={styles.label}>
            height: {personFullInfo?.height}
          </Typography>
          <Typography className={styles.label}>
            mass: {personFullInfo?.mass}
          </Typography>
          <Typography className={styles.label}>
            skin color: {personFullInfo?.skin_color}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default HumanPage;
