import AppBar from '../../components/AppBar/AppBar'
import Card from '../../components/Card/Card'
import styles from "./Homepage.module.scss";
import cx from "classnames";
import Logo from "../../assets/logo.svg";
import { useForm, Controller, SubmitHandler, FieldValues } from "react-hook-form";
import { categories } from '../../consts/consts';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Homepage() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const {

    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const selectTitle = (cats: string) => {
    setTitle(cats);
  };

  const startHandler: SubmitHandler<FieldValues> = (data) => {
    const payload = { ...data, title: title };
    if (!title) {
      alert("Please select a title!");
      return false;
    }
    localStorage.setItem('payload', JSON.stringify(payload));
    navigate('/quiz');
  }
  return (
    <div>
      <AppBar />
      <div className='mt-3'>
        <Card className={cx(styles.HomePage__Card, 'radius-2', 'shadow-5', 'p-1')}>
          <div className={styles.HomePage__Card__Container}>
            <p className="h5 text-white">
              Lets Play<br /> & Win!
            </p>
            <span>
              <img src={Logo} alt="Image" />
            </span>
          </div>
        </Card>
        <div>
          <form onSubmit={handleSubmit(startHandler)}>
            <p className='h6 text-white mt-2 text-center text-white'>Start Game</p>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <input placeholder='Your Name' className='input mt-4' {...field} />}
            />
            <p>{errors.name && <span className='mt-2 color-danger ml-1'>This field is required</span>}</p>
            <br />
            <div className={styles.HomePage__Options}>
              {Object.keys(categories).map((cats: string) => {
                return (<div className={cx({ [styles.BorderSelect]: cats === title })} key={cats} onClick={() => selectTitle(cats)} role='presentation'>
                  {cats}
                </div>)
              })}
            </div>
            <button className='btn-block btn btn-info mt-3' type="submit">Lets Get Started!!</button>
          </form>
        </div>
      </div >
    </div >
  )
}

export default Homepage