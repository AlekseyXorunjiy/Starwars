import { fetchPeople, searchPeople } from "../../store/reducers/PeopleAction";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect, useState } from "react";
import CardsList from "../../components/CardList/CardsList";
import style from "./MainPageStyles.module.scss";
import useDebounce from "../../hooks/debounce";
import { TextField } from "@mui/material";
import CustomPagination from "../../components/CustomPagination/CustomPagination";

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { people, count, isLoading } = useAppSelector(
    (state) => state.peopleReducer
  );

  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    debouncedSearchTerm
      ? dispatch(searchPeople(debouncedSearchTerm))
      : dispatch(fetchPeople());
  }, [debouncedSearchTerm]);

  return (
    <div>
      <div className={style.header}>
        <h1 className={style.title}>Star Wars</h1>
        <div className={style.loading}>
          {isLoading && <span className={style.title}>Loading ...</span>}
        </div>
        <TextField
          label="Search"
          color="primary"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
          focused
        />
      </div>

      <div className={style.listWrapper}>
        {people.map((human) => (
          <CardsList data={human} key={human.name} />
        ))}
      </div>
      {!debouncedSearchTerm && (
        <div className={style.paginationWrapper}>
          <CustomPagination totalPeople={count} />
        </div>
      )}
    </div>
  );
};

export default MainPage;
