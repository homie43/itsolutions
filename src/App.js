import tel from "./assets/image/tel.svg";
import mail from "./assets/image/mail.svg";
import logo from "./assets/image/logo.png";
import f from "./assets/image/f.png";
import vk from "./assets/image/vk.png";
import lang from "./assets/image/lang.png";
import carInfo from "./assets/image/carInfo.png";
import men from "./assets/image/men.png";

import SwiperFun from "./component/SwiperFun";

function App() {
  const carData = ["Марка", "Модель", "Мотор", "Год", "Топливо", "КПП", "Пробег", "Техосмотр", "Желаемая цена"];
  const userData = [
    { name: "name", label: "Имя", id: "name", for: "name" },
    { name: "emale", label: "Почта", id: "emale", for: "emale" },
    { name: "tel", label: "Телефон", id: "tel", for: "tel", attribute: "recuired" },
    { name: "text", label: "Марка", id: "text", for: "text" },
    { name: "text", label: "Сообщение", id: "text", for: "text" },
  ];

  return (
    <>
      <header className="header bg-lg relative">
        <div className="header__wrapper ">
          <ul className="header__contact text-white pt-3">
            <li className="info__tel ">
              <span>
                <img src={tel} alt="" />
              </span>
              <a href="tel:+37243675476">+372 43675 476</a>
            </li>

            <li className="info__email mt-1.5">
              <span>
                <img src={mail} alt="" />
              </span>
              <a href="mailto:info@example.ee">info@example.ee</a>
            </li>
          </ul>
        </div>

        <div className="nav bg-prim flex flex-col absolute">
          <div className="flex">
            <div className="nav__logo mx-auto">
              <img src={logo} alt="logo" />
            </div>
            <div className="nav__social flex items-center gap-3">
              <a href="https://faceboock.com">
                <img src={f} alt="fb" />
              </a>
              <a href="https://vk.com">
                <img src={vk} alt="vk" />
              </a>
            </div>
          </div>

          <div className="flex justify-between  ">
            <ul className="nav__menu font-robo font-normal flex justify-around text-white ">
              <li>
                <a href="/">ГЛАВНАЯ</a>
              </li>
              <li>
                <a href="/">О НАС</a>
              </li>
              <li>
                <a href="/">ОТПРАВЬТЕ НАМ ПРЕДЛОЖЕНИЕ </a>
              </li>
              <li>
                <a href="/">ЧЗВ</a>
              </li>
              <li>
                <a href="/">БЛОГ</a>
              </li>
              <li>
                <a href="/">КОНТАКТЫ</a>
              </li>
            </ul>
            <div className="nav__lang mx-auto">
              <img src={lang} alt="lang" />
            </div>
          </div>
        </div>
      </header>

      <section className="contact relative">
        <form className="contact__form">
          <h2 className="contact__title text-prim font-arimo">Данные автомобиля</h2>
          <div className="form__wrapper">
            {carData.map((item) => (
              <div className="contact__input">
                <input name="name" id="name" type="text" />
                <label className="font-robo font-bold" for="name">
                  {item}
                  {item === "Желаемая цена" && <span className="absolute"></span>}
                </label>
              </div>
            ))}
            <button className="btn contact__btn text-white font-robo ">Добавить фото</button>
          </div>
          <h2 className="contact__title text-prim font-arimo mt-6">Другие данные</h2>
          <div className="contact__wrapper-other">
            {userData.map((item) => (
              <div
                className={item.label === "Сообщение" ? "contact__input grid col-start-1 col-end-3" : "contact__input"}
              >
                <input name={item.name} id={item.id} type={item.type} />
                <label className="font-robo font-bold" for={item.for}>
                  {item.label}
                  {item.name === "tel" && <span className="absolute"></span>}
                </label>
              </div>
            ))}
          </div>
          <div className="contact__policy flex gap-1">
            <input className="flex items-center" required type="checkbox" />
            <span className="text-prim font-robo font-bold">
              Я согласен(на), что фирма использует мои личные данные на основе <br />
              {/* этот тег - вынужденная мера */}
              <a href="/">Политики конфедициальности</a>
            </span>
          </div>
          <button className="btn form__btn text-white font-robo ">Отправить</button>
        </form>

        <div className="contact__img absolute">
          <img src={carInfo} alt="" />
        </div>
      </section>

      <section className="advantage flex justify-around">
        <div className="advantage__img ">
          <img src={men} alt="" />
        </div>

        <div className="advantage__wrapper">
          <div className="advantage__img ">
            <img className="mx-auto" src={logo} alt="Logo" />
          </div>
          <div className="advantage__text">
            <p className=" text-black text-center font-arimi font-bold">
              Желаешь продать машину быстро, но не хочешь заниматься этим самостоятельно? Доверь нам все проблемы,
              связанные с продажей машины!
            </p>
          </div>
          <SwiperFun />
        </div>
      </section>

      <section className="about">
        <h1 className="about__title">О НАС</h1>
        <h2 className="about__subtitle">
          Мы действуем на рынке автомобилей уже много лет и знаем как оформить сделку быстро и без проблем.
        </h2>
        <p className="about__text">
          Первое, что следует сделать заинтересованному в продаже машины человеку – связаться с нами, заполнив
          контактную форму на сайте или позвонив по телефону. На основании полученного со слов описания машины мы
          назовем предварительную стоимость. Точное ценовое предложение станет известно после проведения оценки, которую
          выполнит наш специалист, вы
        </p>
      </section>
    </>
  );
}

export default App;
