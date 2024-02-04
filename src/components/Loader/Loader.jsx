import { Oval } from 'react-loader-spinner'
export const Loader = ({visible}) => {
    return <Oval
        visible={visible}
        height="40"
        width="40"
        color="#327bce"
        secondaryColor="#154f92"
        ariaLabel="oval-loading"
        wrapperClass="loader"
        />
};
