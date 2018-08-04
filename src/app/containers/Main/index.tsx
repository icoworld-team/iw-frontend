import React,{Component} from 'react';
import Header from '../../components/Header/';
import Footer from '../../components/Footer/';
import Form from '../../components/Form/';
import Advantages from '../../components/Advantages/';
import * as style from './style.scss';

const advantagesForInvestors = [
  {
    desc: 'Единое пространство общения с основными участниками ICO-рынка'
  },
  {
    desc: 'Доступ к перспективным очищенным от скама проектам'
  },
  {
    desc: 'Безопасная передача средств в доверительное управление'
  }
];

const advantagesForAssetManagers = [
  {
    desc: 'Возможность публичного ведения инвестиционного портфеля'
  },
  {
    desc: 'Возможность получения средств в доверительное управление'
  },
  {
    desc: 'Удобная инфраструктура для привлечения клиентов'
  }
];

const advantagesForProjects = [
  {
    desc: 'Доступ к активной целевой аудитории'
  },
  {
    desc: 'Повышенное доверие со стороны инвесторов'
  },
  {
    desc: 'Минимальная стоимость проведения ICO'
  }
];

const howItWork = [
  {
    desc: 'Элементы блогинга и социальной сети позволяют пользователям общаться'
  },
  {
    desc: 'Инвесторы, управляющие активами и ICO-проекты заключают сделки между собой'
  },
  {
    desc: 'Встроенные escrow-сервисы гарантируют соблюдение оговоренных условий'
  }
];

class Main extends Component {
  render() {
    return (
      <div>
        <div className={style.wrapper}>
          <Header />

          <div className={style.logo}>
            <div className={style.logo__left}>
              <img className={style.logo__img} src="../../../assets/img/earth.png" />
            </div>
            <div className={style.logo__right}>
              <span className={style.logo__text}>icoWorld</span>
            </div>
          </div>

          <div className={style.info}>
            <div className={style.container}>
              <p>
                Социальная сеть для криптоинвесторов, управляющих активами, ICO-проектов. <br/>
                icoWorld создает удобное пространство для общения и обеспечивает честность деловых отношений.
              </p>
            </div>
          </div>

          <Form />

          <div className={style.container}>
            <Advantages title="Преимущества для криптоинвесторов:" items={advantagesForInvestors} />
            <Advantages title="Преимущества для управляющих активами:" items={advantagesForAssetManagers} />
            <Advantages title="Преимущества для проектов:" items={advantagesForProjects} />
            <Advantages title="Как работает:" items={howItWork} />
          </div>

          <Footer />

        </div>
      </div>
    );
  }
}

export default Main;
