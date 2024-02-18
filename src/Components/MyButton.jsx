import PropTypes from 'prop-types'
const MyButton = ({ action }) => {
    return (
        <button className="rounded-md bg-gradient-to-r from-red-400 to-red-600  py-3 px-6 duration-200 hover:from-red-400 hover:to-red-700  text-white hover:shadow-md  font-medium focus:outline-none">
            {action}
        </button>
    );
};

MyButton.propTypes = {
    action: PropTypes.object
};
export default MyButton;