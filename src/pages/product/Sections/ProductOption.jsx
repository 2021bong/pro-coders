import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineDownload } from 'react-icons/ai';
import { useState } from 'react';
import AccordionCard from './AccordionCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductSkeleton from '../../../components/Skeleton/ProductSkeleton';
import { useEffect } from 'react';

const StyledPage = styled.main`
  .productInnerBox {
    width: 1280px;
    height: 100%;
    margin: 0 auto;
    margin-bottom: 100px;
    .productDetailBox {
      display: flex;
      width: 100%;
      height: 100%;
      margin-top: 200px;
      .productImgBox {
        width: 50%;
        height: 100%;
        .productItemPicture {
          width: 100%;
          height: 60%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .imgContainer {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          img {
            width: 150px;
            height: 150px;
          }
        }
        .imgContainer {
          width: 100%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          padding: 40px 0 0 0;
          cursor: pointer;
          img {
            width: 100px;
            height: 100px;
            margin: 5px 0;
          }
        }
        .productItemPictureList {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          .itemPictureList {
            width: 130px;
            height: 122px;
            background: blue;
          }
        }
      }
      .productOrderBox {
        width: 50%;
        height: 100%;
        padding: 50px;

        .productInformationBox {
          display: flex;
          justify-content: space-between;
          margin-bottom: 50px;
          .productInformation {
            display: flex;
            flex-direction: column;
            .productCate {
              font: bold 16px/1 'poppins';
              margin-bottom: 10px;
            }
            .productName {
              font: 30px/1 'apple';
            }
          }
          .productUnit {
            display: flex;
            align-items: flex-end;
            font-size: 30px;
            span {
              margin-right: 10px;
            }
          }
        }

        .productPriceBox {
          .productPriceSaleOn {
            .price {
              display: block;
              margin: 10px;
              font: bold 18px/1 'apple';
              color: #999;
              text-decoration: line-through;
            }
            .salePercent {
              margin-right: 10px;
              font: bold 30px/1 'poppins';
              color: #ff0052;
            }
            .salePrice {
              margin-right: 10px;
              font: bold 30px/1 'poppins';
              color: #000;
            }
          }
          .productPriceSaleOff {
            .price {
              margin-right: 10px;
              font: bold 30px/1 'poppins';
              color: #000;
            }
          }
          .tooltip {
            display: inline-block;
            font-size: 20px;
            color: #999;
          }
        }

        .couponBox {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 30px 0px;
          width: 100%;
          border-bottom: 2px solid #000;

          padding-bottom: 50px;
          .reviewScore {
            display: flex;
            justify-content: center;
            align-items: center;
            font: 18px/1 'apple';
            color: #999;
            span {
              margin-left: 20px;
              font: 15px/ 'apple';
              color: #000;
              text-decoration: underline;
            }
          }
          .couponDownload {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100px;
            height: 40px;
            border: 1px solid #999;
            border-bottom: 1px solid #000;
            color: #999;
          }
        }
        .productOption {
          margin-top: 50px;
          .productColor {
            .productColorTitle {
              display: block;
              font: bold 18px 'apple';
              margin-bottom: 10px;
            }
            .productColorPictureBox {
              display: block;
              width: 130px;
              height: 130px;
              margin-bottom: 20px;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
          .productSize {
            #product-size-unisex {
              display: block;
            }
            #product-size-male {
              display: none;
            }
            #product-size-female {
              display: none;
            }
            select {
              width: 100%;
              padding: 0.8em 0.5em;
              font-family: inherit;
              background: url('https://image.prospecs.com/front/images/renewal/icon_arrow_D.svg') no-repeat 95% 50%;
              border: 1px solid #999;
              border-radius: 0px;
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
            }
          }
        }
        .productOrderBtn {
          display: flex;
          justify-content: center;
          flex-direction: column;
          width: 100%;
          margin-top: 60px;
          border-bottom: 1px solid #000;

          a {
            cursor: pointer;
          }

          .purchase {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 70px;
            margin-bottom: 20px;
            border: 1px solid #222;
            background: #222;
            color: #fff;
            font: bold 18px/1 'apple';
          }
          .basket {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 70px;
            border: 1px solid #222;
            color: #000;
            font: 18px/1 'apple';
            background-color: white;
            cursor: pointer;
          }
          .stock {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 70px;
            margin-bottom: 50px;
            border: 1px solid #222;
            color: #000;
            font: 16px/1 'apple';
          }
        }
        .naverBtnInnerBox {
          display: flex;
          .npayInnerBox {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            border-bottom: 1px solid #ddd;
            .npayText {
              display: flex;
              flex-direction: column;
              width: 100%;
              padding: 15px 10px;
              font: 12px/1 'apple';
              .naverLogo {
                font: bold 14px/1 'poppins';
                color: #19b419;
              }
            }
            .npayBtn {
              width: 100%;
              height: 70%;
              background-color: #19b419;
              .npayImg {
                display: flex;
                justify-content: center;
                align-items: center;
                padding-left: 50px;
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        .npayBanner {
          span {
            &:nth-of-type(1) {
              margin-right: 10px;
              font: 12px/1 'apple';
              color: #19b419;
            }
            &:nth-of-type(2) {
              font: 12px/1 'apple';
            }
          }
        }
      }
    }
  }

  .productCount {
    padding: 20px 0px;
    p {
      font-weight: 900;
      font-size: 20px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      height: 35px;

      input {
        padding: 6px;
        width: 60px;
        position: absolute;
        left: 60%;
        top: 0;
        border: 1px solid ${({ theme }) => theme.colors.disabledTitle};
      }
    }

    p.error {
      margin-top: 20px;
      color: ${({ theme }) => theme.colors.textHover};
    }
  }
`;

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000050;
  z-index: 10;

  div.modalContainer {
    background-color: white;
    max-width: 800px;
    width: 100%;
    border: 1px solid black;
    padding: 20px;

    h2 {
      font-weight: 900;
      font-size: 24px;
      line-height: 1.5;
      word-break: keep-all;
      text-align: center;
    }

    div.btnContainer {
      display: flex;
      justify-content: center;
      gap: 20px;
      padding-top: 20px;
      margin-top: 20px;
      border-top: 2px solid black;

      button {
        width: 50%;
        padding: 20px;
        border: 1px solid black;
        background-color: white;
      }
    }
  }
`;

const ProductOption = ({ product, userInfo: { isLogin, user_id, token } }) => {
  const [error, setError] = useState(false);
  const [overlapError, setOverlapError] = useState(false);
  const [size, setSize] = useState('250');
  const [count, setCount] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    product && product.sizes === 'FREE' && setSize('FREE');
  }, [product]);

  const addCartHandler = async (e, itemId) => {
    e.preventDefault();

    if (!isLogin) {
      setErrorMessage('????????? ????????????');
      setOverlapError(true);
      return;
    }

    if (isLogin && !error) {
      setDisabled(true);
      try {
        await axios.post(
          'http://localhost:8000/cart',
          {
            user_id,
            product_id: itemId,
            size,
            count,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setDisabled(false);
        setErrorMessage('??????????????? ?????? ???????????????');
        setOverlapError(true);
      } catch (error) {
        console.log(error);
        setDisabled(false);
        setErrorMessage('????????? ?????????????????? ???????????? ????????????');
        setOverlapError(true);
      }
    }
  };

  const changeHandler = e => {
    const countNumber = Number(e.target.value);

    if (countNumber) {
      setCount(countNumber);
      setError(false);
    } else {
      setCount(1);
      e.preventDefault();
      setError(true);
    }
  };

  return (
    <StyledPage>
      {overlapError && (
        <StyledModal>
          <div className='modalContainer'>
            <h2>{errorMessage}</h2>
            <div className='btnContainer'>
              <button onClick={() => setOverlapError(false)}>????????????</button>
              <button onClick={() => navigate('/cart')}>????????????</button>
            </div>
          </div>
        </StyledModal>
      )}
      {product ? (
        <div className='productInnerBox'>
          <div className='productDetailBox'>
            {/* ????????? ?????? */}
            <div className='productImgBox'>
              {/* ?????? ????????? ???????????? ????????? ?????? */}
              <div className='productItemPicture'>
                <img src={product.main_image} alt='Selected' className='selected' />
              </div>
              {/* ?????? ????????? ????????? ?????? ????????? ????????? */}
              <div className='imgContainer'>
                {/* ???????????? */}
                <img src={product.main_image} />
                {/* ???????????? */}
                <img src={product.sub_image} />
                {/* ???????????? */}
                <img src={product.back_image} />
                {/* ?????????????????? */}
                <img src={product.high_image} />
              </div>
            </div>
            {/*?????? ?????? ??? ???????????? */}
            <div className='productOrderBox'>
              <div className='productInformationBox'>
                <div className='productInformation'>
                  <span className='productCate'>{product.keyword}</span>
                  <span className='productName'>{product.title}</span>
                </div>
                <div className='productUnit'>
                  <span className='likeBtn'>
                    <AiOutlineHeart />
                  </span>
                  <span className='shareBtn'>
                    <AiOutlineShareAlt />
                  </span>
                </div>
              </div>
              <div className='productPriceBox'>
                {product.is_discounted === 1 ? (
                  <div className='productPriceSaleOn'>
                    <span className='price'>{product.price}???</span>
                    <span className='salePercent'>{product.discount_percent}%</span>
                    <span className='salePrice'>{product.discounted_price}???</span>
                    <div className='tooltip'>
                      <AiOutlineQuestionCircle />
                    </div>
                  </div>
                ) : (
                  <div className='productPriceSaleOff'>
                    <span className='price'>{product.price}???</span>
                    <div className='tooltip'>
                      <AiOutlineQuestionCircle />
                    </div>
                  </div>
                )}
              </div>
              <div className='couponBox'>
                <a className='reviewScore' href='#'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <span>0?????? ?????? ??????</span>
                </a>
                <span className='couponDownload'>
                  ????????????
                  <AiOutlineDownload />
                </span>
              </div>
              <div className='productBenefits'>
                <AccordionCard />
              </div>
              <div className='productOption'>
                <div className='productColor'>
                  <span className='productColorTitle'>??????</span>
                  <a href='#' className='productColorPictureBox'>
                    <img src={product.main_image} />
                  </a>
                </div>
                {product?.sizes !== 'FREE' && (
                  <div className='productSize'>
                    <select
                      name='productSize'
                      id='product-size-unisex' //
                      onChange={e => setSize(e.target.value)}
                      defaultValue='250'
                    >
                      <option value='init'>???????????????</option>
                      <option value='230'>230</option>
                      <option value='240'>240</option>
                      <option value='250'>250</option>
                      <option value='260'>260</option>
                      <option value='270'>270</option>
                      <option value='280'>280</option>
                      <option value='290'>290</option>
                    </select>

                    <select name='product-size' id='product-size-male' onChange={e => setSize(e.target.value)} defaultValue='250'>
                      <option value='init'>???????????????</option>
                      <option value='250'>250</option>
                      <option value='260'>260</option>
                      <option value='270'>270</option>
                      <option value='280'>280</option>
                      <option value='290'>290</option>
                    </select>

                    <select name='product-size' id='product-size-female' onChange={e => setSize(e.target.value)} defaultValue='250'>
                      <option value='init'>???????????????</option>
                      <option value='230'>230</option>
                      <option value='240'>240</option>
                      <option value='250'>250</option>
                    </select>
                  </div>
                )}

                <div className='productCount'>
                  <div>
                    <p>??????</p>
                    <input type='text' id='count' name='count' onChange={changeHandler} placeholder={1} />
                    <p>
                      {(
                        Number(
                          product.discounted_price
                            .split('')
                            .filter(e => e !== ',')
                            .join('')
                        ) * count
                      ).toLocaleString()}
                      ???
                    </p>
                  </div>
                  {error && <p className='error'>????????? ???????????????</p>}
                </div>
              </div>
              <div className='productOrderBtn'>
                <div className='orderBtnInnerBox'>
                  <a className='purchase'>????????????</a>
                  <button className='basket' onClick={e => addCartHandler(e, product.id)} disabled={disabled}>
                    {disabled ? '??????????????????' : '????????????'}
                  </button>
                  <a className='stock'>???????????? ?????? ?????? ?????? &#62;</a>
                </div>
              </div>
              <div className='naverBtnInnerBox'>
                <div className='npayInnerBox'>
                  <div className='npayText'>
                    <span className='naverLogo'>NAVER</span>
                    <span>????????? ID??? ????????????</span>
                    <span>???????????????</span>
                  </div>
                  <div className='npayBtn'>
                    <a href='#' className='npayImg'>
                      <img src='https://image.prospecs.com/front/images/renewal/icon_naverpay.svg' alt='N-pay ??????' />
                      <span className='hidden'>N-pay ??????</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className='npayBanner'>
                <span>[??????????????????]</span>
                <span>????????? 100% ?????? ??????</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ProductSkeleton />
      )}
    </StyledPage>
  );
};

export default ProductOption;
