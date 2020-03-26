import { useDispatch } from "react-redux";
import { getRepos, clearRepos } from "../actions";

const useHubData = () => {

    const dispatch = useDispatch();

    const onGet = input => dispatch(getRepos(input));
    const onClear = () => dispatch(clearRepos());

    return {
        onGet,
        onClear
    };
};

export default useHubData;
