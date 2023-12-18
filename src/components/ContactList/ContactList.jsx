import { ContactElement } from 'components/ContactElement/ContactElement';
import css from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contacts}>
      {contacts.map(contact => (
        <ContactElement
          key={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};
