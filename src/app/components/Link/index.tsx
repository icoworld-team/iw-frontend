import React,{Component} from 'react';
import * as style from './style.scss';

export interface LinkProps { href: string; text: string; }

class Link extends Component<LinkProps> {
  render() {
    return (
      <a href={this.props.href} className={style.link}>{this.props.text}</a>
    );
  }
}

export default Link;
