import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../contexts/user-context';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';

const Header = () => {
  const {name, setName } = useContext(userContext);
  const [edit, setEdit] = useState(false);
  const [newName, setNewName] = useState(name);

  return (
    <header className={styles.header} onClick={() => {
      setEdit(false);
      setName(newName || name);
      }}>
      <Link to="/restaurants">
        <Logo />
      </Link>
      <div className={styles.header__name} onClick={(e) => e.stopPropagation()}>
        {
          edit
          ?
          <div className={styles.header__editField}>
            <input
              type="text"
              value={newName}
              onChange={({target}) => setNewName(target.value)}
            />
          </div>
          :
          <h2>{name}</h2>
        }
        <div 
          className={styles.header__editIcon}
          onClick={(e) => setEdit(true)}
        ></div>
      </div>
    </header>
  );
};

export default Header;
