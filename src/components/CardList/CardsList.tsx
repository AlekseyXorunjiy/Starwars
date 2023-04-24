import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IResult } from "../../types";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { currentPerson } from "../../store/reducers/PersonAction";

import style from "./CardListStyles.module.scss";

interface ICard {
  data: IResult;
}

const CardsList: React.FC<ICard> = ({ data }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(currentPerson(data.name));
  };

  return (
    <Link className={style.link} to="/human" onClick={handleClick}>
      <Card className={style.card} variant="outlined">
        <CardContent>
          <Typography className={style.label} variant="h3">
            {data.name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardsList;
