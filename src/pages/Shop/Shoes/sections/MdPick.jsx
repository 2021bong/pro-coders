import styled from 'styled-components';

const StyledmdPick = styled.div`
  .nominationInnerBox {
    position: relative;
    display: block;
    width: 100%;
    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, #ffffff00 60%, #000);
      opacity: 0.9;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .nominationMdPickBox {
      position: absolute;
      width: 40px;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .nominationItemContentBox {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 100%;
    height: 100%;
    text-align: left;
    padding-left: 20px;
    padding-bottom: 20px;
    .badge {
      margin-bottom: 15px;
      .gender {
        margin-right: 20px;
        .male {
          display: inline-block;
          width: 20px;
          height: 20px;
          background: #000;
          line-height: 20px;
          text-align: center;
          color: #fff;
        }
        .female {
          display: inline-block;
          width: 20px;
          height: 20px;
          background: #ff0052;
          line-height: 20px;
          text-align: center;
          color: #fff;
        }
      }
    }
    .nominationItemTitleBox {
      .nominationItemTitle {
        display: block;
        font: 22px/1 'Poppins';
        margin-bottom: 20px;
        color: #fff;
      }
    }
    .nominationItemPriceBox {
      .nominationItemPriceSaleOff {
        display: block;
        margin-bottom: 10px;
        font: bold 22px/1 'Poppins';
        color: #fff;
      }
      .nominationItemPriceSaleOn {
        display: block;
        margin-bottom: 10px;
        font: 15px/1 'Spoqa Han Sans Neo', 'sans-serif';
        text-decoration: line-through;
        color: #ccc;
      }
      .nominationItemSalePrice {
        margin-right: 100px;
        font: bold 22px/1 'Poppins Bold', 'sans-serif';
        color: #fff;
      }
      .nominationItemSalePercent {
        font: bold 22px/1 'Poppins';
        color: #fff;
      }
    }
  }
`;

function MdPick({ item }) {
  return (
    <StyledmdPick>
      <a href='#' className='nominationInnerBox'>
        <div className='nominationMdPickBox'>
          <img
            src='https://image.prospecs.com/files/upload/display/mdspick/best_badge.png/dims/optimize'
            alt='MD ??????'
          />
        </div>
        <div className='nominationImgBox'>
          <img src={item.cover_image} alt='MD ?????? ??????' />
        </div>
        <div className='nominationItemContentBox'>
          <div className='badge'>
            <span className='gender'>
              {/* ????????? ????????? : gender??? unisex??? ?????? ?????? ???????????? male?????? ??? ??? ???????????? ????????? ????????? ?????? ???????????? */}
              {item.gender === 'UNISEX' ? (
                <>
                  <span className='male'>???</span>
                  <span className='female'>???</span>
                </>
              ) : item.gender === 'MALE' ? (
                <span className='male'>???</span>
              ) : (
                <span className='female'>???</span>
              )}
            </span>
          </div>
          <div className='nominationItemTitleBox'>
            <span className='nominationItemTitle'>{item.title}</span>
          </div>
          <div className='nominationItemPriceBox'>
            {/* ????????? ????????? : sale??? false??? ????????? ??? ???????????? true??? ???????????? ?????? ?????? ???????????? ???????????? ???????????? ?????? */}
            {item.is_discounted === 0 ? (
              <>
                <span className='nominationItemPriceSaleOff'>
                  {item.price}???
                </span>
              </>
            ) : (
              <>
                <span className='nominationItemPriceSaleOn'>
                  {item.price}???
                </span>
                <span className='nominationItemSalePrice'>
                  {item.discounted_price}???
                </span>
                <span className='nominationItemSalePercent'>
                  {item.discount_percent}%
                </span>
              </>
            )}
          </div>
        </div>
      </a>
    </StyledmdPick>
  );
}

export default MdPick;
