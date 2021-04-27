import React from 'react';
import "./Home.css";
import Product from "./Product";


function Home(props) {
    return (
        <div className="home">
            <img className="home_image"
                 src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2021/gw/home_gw_dsktp_kitchen_1500x600._CB655130141_.jpg"
                 alt=""/>

            <div className="home_row">
                <Product
                    id="12334"
                    title="The Lean Startup: How to Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41-6Z6WZywL._AC_SL260_.jpg"
                />

                <Product
                    id="12334"
                    title="The Lean Startup: How to Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41-6Z6WZywL._AC_SL260_.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                    id="12334"
                    title="The Lean Startup: How to Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41-6Z6WZywL._AC_SL260_.jpg"
                />

                <Product
                    id="12334"
                    title="The Lean Startup: How to Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41-6Z6WZywL._AC_SL260_.jpg"
                />

                <Product
                    id="12334"
                    title="The Lean Startup: How to Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41-6Z6WZywL._AC_SL260_.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                    id="12334"
                    title="The Lean Startup: How to Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41-6Z6WZywL._AC_SL260_.jpg"
                />

            </div>



        </div>
    );
}

export default Home;
