import { useOutsideClick } from '../../utilities';
import './dropdown.css'
import { useState, useCallback} from "react";

type DropdownItem = {
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    onHover?: () => void;
};

type DropdownProps = {
    items: DropdownItem[];
    onChange: (value: string) => void;
    children: string | JSX.Element;
    placement?: "center"|"left"|"right";

};



export const Dropdown = ({ items, onChange, children ,placement}: DropdownProps) => {

    const ref = useOutsideClick(() => {
        setIsOpen(false);
    });

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const handleItemClick = useCallback(
        (item: DropdownItem) => {
            if (item.onClick) item.onClick();
            onChange(item.label);
            setIsOpen(false);
        },
        [onChange]
    );
    return (
        <div className="dropdown-container" ref={ref}>
            <div onClick={toggleDropdown} className="dropdown-button">
                {children}
            </div>
            {isOpen && (
                <div className={placement != undefined ? "dropdown-list " + placement : "dropdown-list center"}>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleItemClick(item)}
                            onMouseEnter={item.onHover}
                        >
                            {item.icon && <span className="dropdown-icon">{item.icon}</span>}
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

}