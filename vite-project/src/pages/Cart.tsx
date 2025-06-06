import React, { ReactNode, useEffect, useState } from "react";
import { Component } from "react";
import {Container} from "../components/Container"

export default class Cart extends Component {
    render() {
        return <Counter/>;
    }
}
interface Good {
    title: string;
    description: string;
    price: string;
  }

const GoodsList = ({goods}) => {
    return (
        <div>
          <h2>Список товаров: </h2>
          <ul>
            {goods.map((good, index) => (
              <li key={index}>
                <h3>{good.title}</h3>
                <p>{good.description}</p>
                <p>Цена: {good.price} руб.</p>
              </li>
            ))}
          </ul>
        </div>
      );
}

const Counter = () => {
    const [goods, setGoods] = useState<Good[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newGood, setNewGood] = useState<Good>({title: '', description: '', price: ''});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewGood({ ...newGood, [name]: value });
    };

    const handleAddGood = () => {
        setGoods([...goods, newGood]);
            setNewGood({ title: '', description: '', price: '' });
            setIsModalOpen(false);
    };

    return (
        <Container>
            <div className="flex felx-col gap-4 items-center justify-center"/>
                <div>
                <button onClick={() => setIsModalOpen(true)}>Добавить товар</button>
                
                {isModalOpen && (
                    <div className="modal">
                    <h2>Добавить новый товар</h2>
                    <input
                        type="text"
                        name="title"
                        placeholder="Название"
                        value={newGood.title}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Описание"
                        value={newGood.description}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Цена"
                        value={newGood.price}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleAddGood}>Добавить</button>
                    <button onClick={() => setIsModalOpen(false)}>Закрыть</button>
                    </div>
                )}

                <GoodsList goods={goods} />
            </div>
        </Container>
    )
}