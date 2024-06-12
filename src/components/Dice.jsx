export default function Dice(props) {

    const randomNumber = Math.floor(Math.random() * 6) + 1

    return (
        <div className="dice">
            {props.randomNumber}
        </div>
    )
}
