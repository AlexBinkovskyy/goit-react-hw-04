import { Contact } from '../Contact/Contact';

export function ContactList({ contacts, handleDelete }) {
  return (
    <ul className="list">
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
}
