import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  transition: 0.3s;
  background-color: ${({ search }) => (search ? 'white' : 'transparent')};

  div.container {
    max-width: 1640px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      transition: 0.2s;
      filter: invert(${({ search }) => (search ? '1' : '0')});
      cursor: pointer;
    }

    a {
      display: block;
      font-weight: 900;
      font-size: 20px;
      transition: 0.2s;
      color: ${({ search }) => (search ? 'black' : 'white')};
    }

    p {
      font-size: 20px;
      font-weight: 900;
      cursor: pointer;
      color: ${({ search }) => (search ? 'black' : 'white')};
      transition: 0.2s;
    }

    ul.gnb {
      display: flex;
      width: 70%;

      & > li {
        & > a {
          padding: 40px 25px;
        }

        div.inner {
          display: flex;
          justify-content: center;
          position: absolute;
          left: 0;
          top: 100%;
          width: 100%;
          padding: 0 20px;
          overflow-y: hidden;
          background-color: white;
          height: 0;
          transition: 0.3s;

          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 6px;
            background-color: black;
          }

          div.innerContainer {
            max-width: 1640px;
            width: 100%;
            height: fit-content;
            padding: 40px 0px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            row-gap: 30px;
            position: relative;

            ul.lnb {
              width: calc(100% / 5);

              &:nth-child(8) {
                width: calc(40%);
                padding-left: calc(20%);
              }

              & > li {
                &:not(:first-of-type) {
                  a {
                    font-weight: 500;
                    font-size: 18px;
                    margin-bottom: 14px;
                  }

                  a.lnbSubMenu {
                    font-weight: 900;
                    margin-top: 40px;
                  }
                }

                &:nth-child(2) {
                  a.lnbSubMenu {
                    margin-top: 0;
                  }
                }
              }
            }

            div.adContainer {
              position: absolute;
              right: 0;
              top: 730px;
              width: 40%;
              padding-bottom: 40px;
              display: flex;
              flex-direction: column;
              gap: 20px;

              img {
                width: 100%;
                filter: none;
              }
            }
          }
        }

        &:first-of-type {
          div.inner {
            overflow-y: scroll;
          }
        }

        &:nth-child(3) {
          div.inner {
            div.innerContainer {
              div.adContainer {
                display: flex;
                flex-direction: row;
                width: calc(40% + 20px);
                top: 40px;
                right: 0;
                padding: 0;

                img {
                  width: calc(50% - 10px);
                }
              }
            }
          }
        }

        &:last-of-type {
          div.inner {
            background-image: url('./header/img/gnb_banner_smartfit.png');
            background-size: auto 270px;

            div.innerContainer {
              position: relative;

              div.textContainer {
                position: absolute;
                top: 125px;
                left: 0;
                display: flex;
                gap: 20px;

                h4 {
                  font-weight: 900;
                  color: white;
                  font-size: 20px;
                }

                p {
                  font-weight: 500;
                  color: white;
                  font-size: 20px;
                  cursor: none;
                }
              }
            }
          }
        }
      }
    }

    ul.gnb2 {
      display: flex;
      gap: 30px;

      & > li {
        display: flex;
        align-items: center;
      }
    }

    a.lnbSubName {
      margin-bottom: 14px;
      border-bottom: 8px solid transparent;
      padding-bottom: 6px;
      width: fit-content;
    }
  }

  &:hover {
    background-color: white;

    div.container {
      img {
        filter: invert(1);
      }

      a {
        color: ${({ theme }) => theme.colors.text};

        &:hover {
          color: ${({ theme }) => theme.colors.textHover};
        }
      }

      p {
        color: ${({ theme }) => theme.colors.text};
      }

      ul.gnb {
        & > li {
          &:first-of-type {
            &:hover {
              div.inner {
                height: 500px;
              }
            }
          }

          &:not(:first-of-type) {
            &:hover {
              div.inner {
                height: 270px;
              }
            }
          }
        }
      }

      a.lnbSubName:hover {
        border-bottom: 8px solid ${({ theme }) => theme.colors.textHover};
      }
    }
  }

  div.searchContainer {
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: ${({ search }) => (search ? '500px' : '0')};
    background-color: white;
    transition: 0.3s;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 6px;
      background-color: black;
    }

    div.search {
      max-width: 600px;
      width: 100%;
      margin-top: 40px;

      form {
        display: flex;
        gap: 10px;

        div.inputContainer {
          display: flex;
          align-items: center;
          width: calc(85% - 10px);
          padding: 10px;
          border: 1px solid #aaaaaa;

          input {
            height: 100%;
            width: 100%;
            border: none;
            font-size: 20px;
            padding-right: 10px;

            &:focus {
              outline: none;
            }
          }

          img {
            cursor: pointer;
          }
        }

        button {
          width: 15%;
          border: none;
          background-color: #333333;
          color: white;
          font-weight: 700;
          padding: 14px 30px;
        }
      }

      h2 {
        margin-top: 30px;
        margin-bottom: 6px;
        font-weight: 700;
      }

      div.down {
        display: flex;
        justify-content: space-between;

        ul.searchList {
          padding-top: 10px;
          li {
            margin-bottom: 12px;
          }
        }

        img {
          width: 40%;
        }
      }
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const input = useRef();
  const [search, setSearch] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const clearHandler = () => {
    input.current.value = '';
    setInputValue('');
  };

  // 나중에 링크 추가

  return (
    <StyledHeader search={search}>
      <div className='container'>
        <img src='./header/icon/logo_white.svg' className='logo' alt='logo' />

        <ul className='gnb'>
          <li>
            <Link to='/'>SHOP</Link>
            <div className='inner'>
              <div className='innerContainer'>
                <ul className='lnb'>
                  <li>
                    <Link to='/' className='lnbSubName'>
                      SHOES
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>러닝화</Link>
                  </li>
                  <li>
                    <Link to='/'>워킹화</Link>
                  </li>
                  <li>
                    <Link to='/'>스포츠화</Link>
                  </li>
                  <li>
                    <Link to='/'>트레킹화</Link>
                  </li>
                  <li>
                    <Link to='/'>스니커즈</Link>
                  </li>
                  <li>
                    <Link to='/'>샌들/슬리퍼</Link>
                  </li>
                  <li>
                    <Link to='/'>아동화</Link>
                  </li>
                  <li>
                    <Link to='/'>기타</Link>
                  </li>
                </ul>
                <ul className='lnb'>
                  <li>
                    <Link to='/' className='lnbSubName'>
                      MEN
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>티셔츠</Link>
                  </li>
                  <li>
                    <Link to='/'>스웻셔츠 & 후디</Link>
                  </li>
                  <li>
                    <Link to='/'>재킷 & 베스트</Link>
                  </li>
                  <li>
                    <Link to='/'>팬츠 & 타이즈</Link>
                  </li>
                  <li>
                    <Link to='/'>숏팬츠</Link>
                  </li>
                  <li>
                    <Link to='/'>트레이닝 상/하</Link>
                  </li>
                  <li>
                    <Link to='/'>기타</Link>
                  </li>
                </ul>
                <ul className='lnb'>
                  <li>
                    <Link to='/' className='lnbSubName'>
                      WOMEN
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>티셔츠</Link>
                  </li>
                  <li>
                    <Link to='/'>스웻셔츠 & 후디</Link>
                  </li>
                  <li>
                    <Link to='/'>재킷 & 베스트</Link>
                  </li>
                  <li>
                    <Link to='/'>스포츠 브라</Link>
                  </li>
                  <li>
                    <Link to='/'>팬츠 & 레깅스</Link>
                  </li>
                  <li>
                    <Link to='/'>숏팬츠 & 스커트</Link>
                  </li>
                  <li>
                    <Link to='/'>트레이닝 상/하</Link>
                  </li>
                  <li>
                    <Link to='/'>기타</Link>
                  </li>
                </ul>
                <ul className='lnb'>
                  <li>
                    <Link to='/' className='lnbSubName'>
                      ORIGINAL
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='lnbSubMenu'>
                      신발
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>스니커즈</Link>
                  </li>
                  <li>
                    <Link to='/'>샌들/슬라이드</Link>
                  </li>
                  <li>
                    <Link to='/' className='lnbSubMenu'>
                      의류
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>티셔츠</Link>
                  </li>
                  <li>
                    <Link to='/'>스웻셔츠 & 후디</Link>
                  </li>
                  <li>
                    <Link to='/'>재킷 & 베스트</Link>
                  </li>
                  <li>
                    <Link to='/'>팬츠 & 레깅스</Link>
                  </li>
                  <li>
                    <Link to='/'>숏팬츠 & 스커트</Link>
                  </li>
                  <li>
                    <Link to='/'>트레이닝 상/하</Link>
                  </li>
                  <li>
                    <Link to='/'>기타</Link>
                  </li>
                  <li>
                    <Link to='/' className='lnbSubMenu'>
                      용품
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>가방</Link>
                  </li>
                  <li>
                    <Link to='/'>모자 & 헤드밴드</Link>
                  </li>
                  <li>
                    <Link to='/'>양말</Link>
                  </li>
                  <li>
                    <Link to='/'>기타</Link>
                  </li>
                </ul>
                <ul className='lnb'>
                  <li>
                    <Link to='/' className='lnbSubName'>
                      BAG/ACC
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>가방</Link>
                  </li>
                  <li>
                    <Link to='/'>모자 & 헤드밴드</Link>
                  </li>
                  <li>
                    <Link to='/'>양말</Link>
                  </li>
                  <li>
                    <Link to='/'>장갑 & 암가드</Link>
                  </li>
                  <li>
                    <Link to='/'>숏팬츠</Link>
                  </li>
                  <li>
                    <Link to='/'>기타</Link>
                  </li>
                </ul>
                <ul className='lnb'>
                  <li>
                    <Link to='/' className='lnbSubName'>
                      KIDS
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='strong'>
                      신발
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='strong'>
                      의류
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='strong'>
                      용품
                    </Link>
                  </li>
                </ul>
                <ul className='lnb'>
                  <li>
                    <Link to='/' className='lnbSubName'>
                      SALE
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='strong'>
                      신발
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='strong'>
                      남성의류
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='strong'>
                      여성의류
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='strong'>
                      용품
                    </Link>
                  </li>
                </ul>
                <ul className='lnb'>
                  <li>
                    <Link to='/' className='lnbSubName'>
                      BEST 50
                    </Link>
                  </li>
                </ul>
                <ul className='lnb'>
                  <li>
                    <Link to='/' className='lnbSubName'>
                      GIFT CARD
                    </Link>
                  </li>
                </ul>
                <div className='adContainer'>
                  <img src='./header/img/ad1.png' alt='ad1' />
                  <img src='./header/img/ad2.png' alt='ad1' />
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link to='/'>EVENT</Link>
          </li>
          <li>
            <Link to='/'>ARCHIVE</Link>
            <div className='inner'>
              <div className='innerContainer'>
                <ul className='lnb'>
                  <li>
                    <Link to='/' className='lnbSubName'>
                      LOOKBOOK
                    </Link>
                  </li>
                </ul>
                <ul className='lnb'>
                  <li>
                    <Link to='/' className='lnbSubName'>
                      NEWS
                    </Link>
                  </li>
                </ul>
                <ul className='lnb'>
                  <li>
                    <Link to='/' className='lnbSubName'>
                      ISSUE
                    </Link>
                  </li>
                </ul>
                <div className='adContainer'>
                  <img src='./header/img/ad3.png' alt='' />
                  <img src='./header/img/ad4.png' alt='' />
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link to='/'>SPONSORSHIP</Link>
            <div className='inner'>
              <div className='innerContainer'>
                <ul className='lnb'>
                  <li>
                    <Link to='/' className='lnbSubName'>
                      프로스포츠
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>LG트윈스</Link>
                  </li>
                  <li>
                    <Link to='/'>FC서울</Link>
                  </li>
                  <li>
                    <Link to='/'>GS칼텍스</Link>
                  </li>
                  <li>
                    <Link to='/'>LG세이커스</Link>
                  </li>
                </ul>
                <ul className='lnb'>
                  <li>
                    <Link to='/' className='lnbSubName'>
                      익스트림 스포츠
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>CAMEL RACE</Link>
                  </li>
                  <li>
                    <Link to='/'>유소년BMX</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <Link to='/'>SMART FIT</Link>
            <div className='inner'>
              <div className='innerContainer'>
                <div className='textContainer'>
                  <h4>SMART FIT</h4>
                  <p>프로스펙스 스마트핏은 내 발에 완벽한 사이즈와 상품을 추천해 주고, 맞춤신발 제작까지 해 주는 SMART한 서비스입니다.</p>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <ul className='gnb2'>
          <li>
            <img src='./header/icon/icon_search_white.svg' className='logo' alt='logo' onClick={() => setSearch(!search)} />
          </li>
          <li>
            <img src='./header/icon/icon_cart_white.svg' className='logo' alt='logo' onClick={() => navigate('/')} />
          </li>
          <li>
            <p>LOGIN</p>
          </li>
        </ul>
      </div>
      <div className='searchContainer'>
        <div className='search'>
          <form onSubmit={e => e.preventDefault()}>
            <div className='inputContainer'>
              <input
                //
                ref={input}
                onChange={e => setInputValue(e.target.value)}
                type='text'
                placeholder='구매 상품평 작성하면 최대 3천 포인트'
              />
              {inputValue && <img src='./header/icon/icon_search_close.svg' alt='close' onClick={clearHandler} />}
            </div>
            <button>검색</button>
          </form>

          <h2>추천검색어</h2>
          <div className='down'>
            <ul className='searchList'>
              <li>2022 S/S</li>
              <li>오리지널</li>
              <li>샌들</li>
              <li>슬리퍼</li>
              <li>스니커즈</li>
              <li>반팔</li>
              <li>반바지</li>
              <li>트레이닝</li>
              <li>냉감</li>
              <li>원더 쿨</li>
              <li>모자</li>
            </ul>
            <img src='./header/img/search_add.png' alt='search banner' />
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
