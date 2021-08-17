const Button = ({ text, onClick }) => {


    return (
        <div>
            <button
                onClick={onClick}
                className='btn btn-light text-info'>{text}</button>

        </div>
    )

}

export default Button
