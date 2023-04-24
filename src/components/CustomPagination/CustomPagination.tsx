import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import { useAppDispatch } from "../../hooks/redux";
import { paginationPeople } from "../../store/reducers/PeopleAction";

interface IPagination {
  totalPeople: number;
}

const CustomPagination: React.FC<IPagination> = ({ totalPeople }) => {
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const count = Math.ceil(totalPeople / 10);

  const handleChanged = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    dispatch(paginationPeople(page));
  };

  return (
    <Pagination
      count={count}
      page={currentPage}
      color="primary"
      onChange={handleChanged}
    />
  );
};

export default CustomPagination;
