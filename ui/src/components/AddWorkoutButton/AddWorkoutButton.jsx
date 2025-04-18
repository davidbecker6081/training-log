import { CustomButton } from '../CustomButton/CustomButton';
import { IoMdAdd } from "react-icons/io";

export const AddWorkoutButton = ({ onClick, disabled, isIconRight, label }) => {
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
