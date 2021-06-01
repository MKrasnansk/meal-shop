import {Fragment} from 'react';
import classes from "./Heade.module.css";
import mealsImage from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
              <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                {/*<mealsImage/>*/}
                <img src={mealsImage} alt="Full table of food."/>
            </div>
        </Fragment>
    );
};

export default Header;
