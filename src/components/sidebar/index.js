import React, {Component, PropTypes} from 'react';
import './style.scss';

export default class Sidebar extends Component {
    render() {
        return (
            <div is id="offcanvas-push" uk-offcanvas="mode: slide; overlay: true" class="uk-animation uk-width-1-1">
                <div className="uk-offcanvas-bar">
                    <ul className="uk-nav uk-nav-default">
                        <li className="uk-active">
                            <a href="#">
                                <span is uk-icon="icon: user" class="uk-margin-small-right"></span>
                                <span className="uk-text-middle uk-text-primary">Рома Богданов</span>
                            </a>
                        </li>
                        <li className="uk-nav-divider"></li>
                        <li className="uk-active">
                            <a href="#">
                                <span is uk-icon="icon: home" class="uk-margin-small-right"></span>
                                <span className="uk-text-middle uk-text-primary">Главная</span>
                            </a>
                        </li>
                        <li className="uk-active">
                            <a href="#">
                                <span is uk-icon="icon: users" class="uk-margin-small-right"></span>
                                <span className="uk-text-middle  uk-text-primary">Пользователи</span>
                            </a>
                        </li>
                        <li className="uk-active">
                            <a href="#">
                                <span is uk-icon="icon: settings" class="uk-margin-small-right"></span>
                                <span className="uk-text-middle  uk-text-primary">Настройки</span>
                            </a>
                        </li>
                        <li className="uk-nav-divider"></li>
                        <li className="uk-active">
                            <a href="#">
                                <span is uk-icon="icon: plus" class="uk-margin-small-right"></span>
                                <span className="uk-text-middle uk-text-primary">Создать новый список</span>
                            </a>
                        </li>
                        <li className="uk-active">
                            <a href="#">
                                <span is uk-icon="icon: heart" class="uk-margin-small-right"></span>
                                <span className="uk-text-middle uk-text-primary">Какое-то действие</span>
                            </a>
                        </li>
                        <li className="sign_out_btn">
                            <a href="#">
                                <span is uk-icon="icon: sign-out" class="uk-margin-small-right"></span>
                                <span className="uk-text-middle">Выйти</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
