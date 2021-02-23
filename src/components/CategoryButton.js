function CategoryButton (props) {
    return (
        <div className="CategoryButton">
            <div className="whitespace-nowrap bg-blue-500 text-white p-2 rounded-lg text-xs transform hover:-translate-y-1 hover:scale-105 transition duration-500 ease-in-out text-center">
                {props.name}
            </div>
        </div>
    );
}

export default CategoryButton;