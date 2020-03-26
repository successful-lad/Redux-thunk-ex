import { useSelector } from "react-redux";

const useGettingHubData = () => {
    const { repos, hasError, isLoading } = useSelector(state => ({
        repos: state.repos,
        hasError: state.loadingError,
        isLoading: state.loadingInProgress
    }));

    return { repos, hasError, isLoading };
};

export default useGettingHubData;
