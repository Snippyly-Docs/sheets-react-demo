import styles from './Toolbar.module.css';

const Toolbar = () => {

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <div className={styles['icon']}></div>
        <h2>Quarterly Financial Results</h2>
      </div>
      <div className={styles['presence-container']}>
        Placeholder
      </div>
    </div>
  );
};

export default Toolbar;