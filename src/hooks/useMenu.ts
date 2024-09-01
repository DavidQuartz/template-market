import { useContext } from 'react';
import DashboardContext from '../context/DashboardContext';

const useMenu = () => {
    const { menu } = useContext(DashboardContext);

    return menu;
};

export default useMenu;
