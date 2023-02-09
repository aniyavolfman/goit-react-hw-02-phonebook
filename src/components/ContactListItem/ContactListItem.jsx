
export function ContactListItem({id, name, number}) {
    return (
        <li key={id}>{name}: <span>{number}</span></li>
    )
}