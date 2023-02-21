import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Box, Container } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

import { fetchOneProduct } from '../../axios/productAPI';
import { create } from '../../axios/basketProductAPI';
import { getId } from '../../axios/basketAPI';

import { Context } from '../..';
import styles from './ProductPage.module.scss';

const ProductPage = observer(() => {
  const [product, setProduct] = useState({ info: [] });
  const { user } = useContext(Context);
  const { id } = useParams();

  // Добавление товара в корзину
  const addBasket = async () => {
    await getId(user.user.id).then((data) => user.setBasketId(data.id));
    await create(user.basketId, id);
    const newBasketCount = user.basketCount + 1;
    user.setBasketCount(newBasketCount);
  };

  useEffect(() => {
    fetchOneProduct(id).then((data) => {
      console.log(data);
      setProduct(data);
    });
    console.log();
  }, []);

  console.log(product);

  return (
    <Container sx={{ marginTop: '50px' }}>
      <h2 style={{ fontSize: '35px', lineHeight: '37px', marginBottom: '30px' }}>{product.name}</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Блок информации о товаре */}
        <Box>
          <div
            style={{
              border: '1px solid rgba(217, 217, 217, 0.39)',
              height: '450px',
              width: '400px',
              borderRadius: '9px',
              overflow: 'hidden',
            }}>
            <img
              src={process.env.REACT_APP_API_URL + product.image}
              alt="product-img"
              style={{ height: '100%', width: '100%' }}
            />
          </div>
          {/* <div>
                        {product.info.map((info, index) =>
                            <div key={index}>
                                {info.title}
                            </div>
                        )}
                    </div> */}
        </Box>

        <Box
          width={350}
          height={150}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '9px',
            boxShadow: '5px 5px 10px 3px #000',
            padding: '15px 10px',
          }}>
          <div
            style={{
              textAlign: 'center',
              fontSize: '35px',
              lineHeight: '42px',
              fontWeight: 'bold',
            }}>
            {product.price} руб.
          </div>
          <div>
            {product.count >= 1 ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <DoneIcon style={{ color: 'green' }} />В наличии
              </span>
            ) : (
              <span>Нет в наличии</span>
            )}
          </div>
          <button
            style={{
              width: '200px',
              display: 'block',
              padding: '10px 10px',
              backgroundColor: '#3B75B6',
              border: 'none',
              borderRadius: '9px',
              color: '#fff',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              margin: '10px auto',
              cursor: 'pointer',
            }}
            onClick={addBasket}>
            Добавить в корзину
          </button>
        </Box>
      </div>
    </Container>
  );
});

export default ProductPage;
