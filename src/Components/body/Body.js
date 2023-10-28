import styles from './Body.module.css';
import Header from './Header/Header';
import Chartcontainer from './chartcontainer/Chartcontainer';
import Dashboardintro from './dashboardintro/Dashboardintro';
import Statscontainer from './statscontainer/Statscontainer';

const Body = (props) => {
  return (
    <div className={styles.body}>
      <Header></Header>
      <Dashboardintro />
      <Statscontainer />
      <Chartcontainer />
    </div>
  );
};
export default Body;
