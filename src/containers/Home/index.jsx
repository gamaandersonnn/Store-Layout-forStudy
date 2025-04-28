import React, { useState, useEffect } from "react";
import './style.css'
import Header from '../../components/Header/index'
import Tshirt from '../../assets/pngegg.png'
import Tshirt2 from '../../assets/pngegg1.png'
import { Link } from "react-router";

const products = [
    {
        title: "Camisa Casual Elegante",
        description: "Ideal para um passeio à beira-mar com muito estilo e conforto.",
        image: 'https://e7.pngegg.com/pngimages/818/897/png-clipart-men-s-black-and-gray-formal-coat-blazer-suit-jacket-fashion-coat-blazer-tshirt-cloth-thumbnail.png'
    },
    {
        title: "Camisa Aventura",
        description: "Perfeita para trilhas e viagens, com design funcional e bolsos práticos.",
        image: 'https://e7.pngegg.com/pngimages/955/626/png-clipart-men-s-blue-dress-shirt-and-blue-and-gray-necktie-t-shirt-dress-shirt-suit-necktie-t-shirt-blue-electric-blue-thumbnail.png'
    },
    {
        title: "Camisa Olhar Criativo",
        description: "Design artístico e expressivo — destaque seu estilo único.",
        image: 'https://e7.pngegg.com/pngimages/392/14/png-clipart-human-eye-and-hand-drawing-illustration-t-shirt-black-and-white-graphy-drawing-sketch-black-and-white-eyes-illustrations-white-mammal-thumbnail.png'
    }
];

export default function Home() {

    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const changeProduct = (newIndex) => {
        setFade(false);
        setTimeout(() => {
          setIndex(newIndex);
          setFade(true);
        }, 300);
      };

      
    const prevProduct = () => {
        changeProduct((index - 1 + products.length) % products.length);
    };

    const nextProduct = () => {
        changeProduct((index + 1) % products.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextProduct();
        }, 5000);

        return () => clearInterval(interval);
    }, [index]);

    const product = products[index];

    return (
        <>
            <Header />
            <body>
                <div class="container">
                    <div class="left">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                    </div>


                    <div class="right">
                        <img
                            src={product.image}
                            alt={product.title}
                            className={`product-image ${fade ? 'fade-in' : 'fade-out'}`}
                        />
                        <button class="arrow-button arrow-left" onClick={prevProduct}>&lt;</button>
                        <button class="arrow-button arrow-right" onClick={nextProduct}>&gt;</button>
                        <button class="view-button">Ver Produto</button>
                    </div>
                </div>
            </body>
        </>
    )
}