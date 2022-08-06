import { Button } from "../Button/button";
import { Input } from "../Input/input";
import { Select } from "../Select/select";
import { SwitchButton } from "../SwitchButton/switchButton";
import { Title } from "../Title/title";
import "./converter.css";

export function Converter() {

    

    return (
        <section className="light-crypto__converter converter">
            <div className="converter__container container">
                <div className="converter__header">
                    <Title className={"converter__title"} content={"💎 Cryptocurrency Converter"} />
                    <Button className={"converter__button"} content={"refresh"} />
                </div>
                <form className="converter__body">
                    <div className="converter__item">
                        <Input className={"converter__input"} id={"cryptoInput"} placeholder={"Enter amound"}/>
                        <Select className={"converter__select"} id={"cryptoInput"} />
                    </div>
                    <SwitchButton className={"converter__switch-button"} />
                    <div className="converter__item">
                        <Input className={"converter__input"} id={"currencyInput"} />
                        <Select className={"converter__select"} id={"currencyInput"} />
                    </div>
                    <Button className={"converter__button"} content={"refresh"} />
                </form>
            </div>
        </section>
    );
}