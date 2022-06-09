import { Carousel, Col, Row } from "antd";
import React from "react";
import { H3 } from "../../TextComponents/HeaderTextComponents";
import { P3 } from "../../TextComponents/ParagraphTextComponents";
import image from "./../../../assets/img/use_cases.png";
import cls from "./UseCases.module.scss";

const Marketers = () => {
    return (
        <Row justify="space-around" align="middle" className={cls.body}>
            <Col span={8}>
                <img src={image} alt={image} />
            </Col>
            <Col span={10}>
                <Carousel autoplay={true} effect="fade">
                    <div>
                        <H3 margin="0 0 35px">Protection 9</H3>
                        <P3 margin="0 0 70px">
                            Such a mailbox is better to use for registration on any untrustworthy site - for example, to give it to the
                            provider of WiFi network in the airport (not very relevant in quarantine, of course, but sooner or later such a
                            smarthack is sure to be useful to someone) or any potential spammer and pre-sales amateur.
                        </P3>
                    </div>
                    <div>
                        <H3 margin="0 0 35px">Protection 10</H3>
                        <P3 margin="0 0 70px">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eum facere animi odio tenetur molestiae harum
                            pariatur voluptatum earum, nemo molestias consequuntur maxime soluta illum libero vero non, corporis enim.
                        </P3>
                    </div>
                    <div>
                        <H3 margin="0 0 35px">Protection 11</H3>
                        <P3 margin="0 0 70px">
                            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Напоивший это, грамматики
                            взобравшись деревни безорфографичный от всех обеспечивает меня пояс там пунктуация, подпоясал дорогу себя
                            послушавшись! Вдали власти подпоясал всеми!
                        </P3>
                    </div>
                    <div>
                        <H3 margin="0 0 35px">Protection 12</H3>
                        <P3 margin="0 0 70px">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos optio aperiam similique tempora totam fugit vero.
                            Aspernatur minima illo cum officiis. Vero, unde maxime deserunt ea dicta sint quas suscipit?
                        </P3>
                    </div>
                </Carousel>
            </Col>
        </Row>
    );
};

export default Marketers;
