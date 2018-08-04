import React,{Component} from 'react';
import * as style from './style.scss';

export interface DescProps { title: string; items: Array<{ desc: string; }>; }

class Advantages extends Component<DescProps> {
  render() {
    return (
      <div className={style.advantages}>

        <div className={style.container}>
          <span className={style.advantages__title}>{this.props.title}</span>
          <ul className={style.advantages__list}>

            {this.props.items.map((item, index) =>
              <li className={style.advantages__item} key={index}>
                <span className={style.advantages__number}>{index + 1}</span>
                <p className={style.advantages__desc}>{item.desc}</p>
              </li>
            )}

          </ul>
        </div>
      </div>
    );
  }
}

export default Advantages;
