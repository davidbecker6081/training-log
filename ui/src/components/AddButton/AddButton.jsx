import { CustomButton } from '../../components';
import { IoMdAdd } from "react-icons/io";

export const AddButton = ({ onClick, disabled, isIconRight, label }) => {
    return (
        <>
            <CustomButton
                className="add-button"
                onClick={onClick}
                disabled={disabled}
                isIconRight={isIconRight}
                label={label}
            >
                <IoMdAdd />
            </CustomButton>
        </>
    );
}