import { useEffect } from "react";
import HomepageRenderer from "./components/HomepageRenderer";
import { fetchHomepageSections } from "../Admins/HomepageBuilder/redux/homepageAsyncThunks";
import { RootState, AppDispatch } from "../State/Store";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {

    const dispatch = useDispatch<AppDispatch>();

    const { sections, loading, error } = useSelector(
        (state: RootState) => state.homepage
    );

    useEffect(() => {
        dispatch(fetchHomepageSections());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return <HomepageRenderer sections={sections} />;
};

export default HomeScreen;