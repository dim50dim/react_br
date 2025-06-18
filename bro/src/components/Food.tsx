export default function Food() {
    const food1: string = 'Orange';
    const food2: string = 'Banana';
    return (
        <>
        <ul>
            <li>Apple</li>
            <li> {food1.toLowerCase()} </li>
            <li>{food2.toLocaleUpperCase()}</li>
        </ul>
        </>
    )
}