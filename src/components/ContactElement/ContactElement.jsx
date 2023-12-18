import css from './ContactElement.module.css';

export const ContactElement = ({ name, number }) => {
  return (
    <li className={css.contactElement}>
      <p>
        &#8226; {name}: {number}
      </p>
      <button type="button">Delete</button>
    </li>
  );
};
