import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Thumbnail, ProductContent, Counter, AddBtn, CloseBtn } from './styles';
import defaultImage from '../../../../assets/images/default.jpg';

const ProductModal = ({ isOpen, toggle, product, price }) => {
  const [totalPrice, setTotalPrice] = useState(price);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setTotalPrice(price * counter);
  }, [counter, price]);

  /**
   * Counter
   * @param {String} type Increment or decrement
   */
  const countAdd = type => {
    if (type === 'more' && counter > 0) {
      setCounter(counter + 1);
    }
    if (type === 'less' && counter > 1) {
      setCounter(counter - 1);
    }
  };

  const closeBtn = (
    <CloseBtn onClick={toggle}>
      <FaTimes />
    </CloseBtn>
  );

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered
      size="lg"
      style={{ maxWidth: 650 }}
    >
      <ModalHeader toggle={toggle} close={closeBtn} className="border-0 p-0" />
      <ModalBody className="d-flex flex-column align-items-center">
        <Thumbnail img={product.picture ? product.picture.url : defaultImage} />
        <ProductContent className="mt-5 d-flex align-items-center flex-wrap">
          <div className="product-info col-md-8 col-sm-12">
            <h2>{product.name}</h2>
            <p>
              {product.description ||
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
            </p>
          </div>
          <div className="product-price align-self-end col-md-4 col-sm-12">
            <h1>
              {`R$ ${price
                .toFixed(2)
                .toString()
                .replace('.', ',')}
                `}
            </h1>
          </div>
        </ProductContent>
      </ModalBody>
      <ModalFooter className="d-flex align-items-center justify-content-between py-3">
        <Counter className="counter d-flex align-items-center justify-content-between">
          <span className="counter-btn" onClick={() => countAdd('less')}>
            -
          </span>
          <span>{counter}</span>
          <span className="counter-btn" onClick={() => countAdd('more')}>
            +
          </span>
        </Counter>
        <AddBtn
          className="d-flex align-items-center justify-content-around flex-wrap"
          onClick={toggle}
        >
          <span className="add-text">Adicionar</span>
          <span>{`R$ ${totalPrice
            .toFixed(2)
            .toString()
            .replace('.', ',')}`}</span>
        </AddBtn>
      </ModalFooter>
    </Modal>
  );
};

ProductModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductModal;
