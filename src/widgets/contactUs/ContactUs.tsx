import contactUs from "@assets/icons/export.svg";
import { useId } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import classes from "./contactUs.module.scss";

interface FormProps {
  fullName: string;
  email: string;
  message: string;
}

const EMAIL_REG_EX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LETTERS_REG_EX = /^[A-Za-zА-Яа-я\s]+$/i;

const ContactUs = () => {
  const id = useId();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      email: "",
      fullName: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormProps> = async data => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="contact" className={classes["contactUs"]}>
      <div className={classes["contactUs__container"]}>
        <div className={classes["title-block"]}>
          <h1>Давай поговорим</h1>
          <img src={contactUs.src} alt="Contact us icon" width={120} height={120} loading="lazy" />
        </div>

        <form className={classes["form"]} onSubmit={handleSubmit(onSubmit)}>
          <label className={classes["visually-hidden"]} htmlFor="fullName">
            NAME*:
          </label>
          <input
            autoComplete="off"
            id={`${id}-fullName`}
            aria-labelledby={`input-label-fullName`}
            type="text"
            placeholder="ИМЯ"
            className={classes["form__input"]}
            {...register("fullName", {
              pattern: LETTERS_REG_EX,
              required: true,
            })}
          />

          <span className={classes["form__errorMsg"]}>{errors.fullName && "Введите полное имя"}</span>

          <label htmlFor={`${id}-login`} className={classes["visually-hidden"]}>
            login
          </label>
          <input
            autoComplete="off"
            id={`${id}-email`}
            aria-labelledby={`input-label-email`}
            type="email"
            placeholder="ПОЧТА"
            className={classes["form__input"]}
            {...register("email", {
              required: true,
              pattern: EMAIL_REG_EX,
            })}
          />

          <span className={classes["form__errorMsg"]}>{errors.email && "Введите корректный email адрес"}</span>

          <label className={classes["visually-hidden"]} htmlFor="message">
            Message*:
          </label>
          <textarea
            autoComplete="off"
            id={`${id}-message`}
            aria-labelledby={`input-label-message`}
            placeholder="СООБЩЕНИЕ..."
            className={classes["form__input"]}
            {...register("message", {
              required: true,
            })}
          ></textarea>

          <span className={classes["form__errorMsg"]}>{errors.message && "Введите сообщение"}</span>

          <button className={classes["form__submitBtn"]}>Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
