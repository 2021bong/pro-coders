import styled from 'styled-components';
import useInfiniteSwiper from '../../../hooks/useInfiniteSwiper';

const StyledSection = styled.section`
  div.container {
    p.new {
      font-weight: 900;
      font-size: 24px;
      color: ${({ theme }) => theme.colors.textHover};
    }

    div.listContainer {
      margin-top: 30px;
      overflow: hidden;
      width: 100%;

      ul.list {
        width: 400%;
        display: flex;

        li {
          width: 25%;
          display: flex;
          gap: 20px;

          img {
            -webkit-user-drag: none;
            user-select: none;
          }

          div.left {
            width: calc(50% - 10px);

            div.imgContainer {
              width: 100%;
              height: 100%;

              img {
                width: 100%;
                height: 100%;
              }
            }
          }

          div.right {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            width: calc(50% - 10px);
            height: 100%;

            div.imgContainer {
              width: calc(50% - 10px);
              height: calc(50% - 10px);

              img {
                width: 100%;
                height: 100%;
              }
            }
          }

          div.imgContainer {
            cursor: pointer;
            position: relative;

            div.des {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              opacity: 0;
              transition: 0.3s;
              color: white;
              background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              padding: 6%;

              p {
                font-size: 20px;
              }

              h2 {
                margin-top: 10px;
                font-size: 30px;
              }

              &:hover {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
`;

const FirstSection = () => {
  const { swipedTarget } = useInfiniteSwiper(4, true);

  return (
    <StyledSection>
      <div className='container'>
        <p className='new'>NEW</p>

        <h2>
          2022 NEW SEASON <br /> ????????? ?????????
        </h2>
        <div className='listContainer'>
          <ul className='list' ref={swipedTarget}>
            <li>
              <div className='left'>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202206/2022061016253636.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>????????? 102</p>
                    <h2>109,000???</h2>
                  </div>
                </div>
              </div>
              <div className='right'>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202206/2022061016253637.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>???????????? 102</p>
                    <h2>71,200???</h2>
                  </div>
                </div>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202206/2022061016253638.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>????????? 103</p>
                    <h2>109,000???</h2>
                  </div>
                </div>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202206/2022061016253639.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>???????????? 101</p>
                    <h2>79,000???</h2>
                  </div>
                </div>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202206/2022061016253640.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>?????? 102</p>
                    <h2>119,000???</h2>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className='left'>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202208/202208161436471.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>????????? ?????? 212(????????? ?????? ??????)</p>
                    <h2>89,000???</h2>
                  </div>
                </div>
              </div>
              <div className='right'>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202208/202208161436482.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>????????? 513(????????? ?????? ??????)</p>
                    <h2>89,000???</h2>
                  </div>
                </div>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202208/202208161436483.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>???????????? 112(????????? ?????? ??????)</p>
                    <h2>89,000???</h2>
                  </div>
                </div>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202208/202208161436484.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>???????????? 114(????????? ?????? ??????)</p>
                    <h2>89,000???</h2>
                  </div>
                </div>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202208/202208161436485.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>????????? 512(????????? ?????? ??????)</p>
                    <h2>89,000???</h2>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className='left'>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202206/2022061016253636.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>????????? 102</p>
                    <h2>109,000???</h2>
                  </div>
                </div>
              </div>
              <div className='right'>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202206/2022061016253637.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>???????????? 102</p>
                    <h2>71,200???</h2>
                  </div>
                </div>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202206/2022061016253638.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>????????? 103</p>
                    <h2>109,000???</h2>
                  </div>
                </div>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202206/2022061016253639.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>???????????? 101</p>
                    <h2>79,000???</h2>
                  </div>
                </div>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202206/2022061016253640.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>?????? 102</p>
                    <h2>119,000???</h2>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className='left'>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202208/202208161436471.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>????????? ?????? 212(????????? ?????? ??????)</p>
                    <h2>89,000???</h2>
                  </div>
                </div>
              </div>
              <div className='right'>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202208/202208161436482.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>????????? 513(????????? ?????? ??????)</p>
                    <h2>89,000???</h2>
                  </div>
                </div>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202208/202208161436483.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>???????????? 112(????????? ?????? ??????)</p>
                    <h2>89,000???</h2>
                  </div>
                </div>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202208/202208161436484.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>???????????? 114(????????? ?????? ??????)</p>
                    <h2>89,000???</h2>
                  </div>
                </div>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202208/202208161436485.jpg/dims/optimize' alt='?????? ?????????' />
                  <div className='des'>
                    <p>????????? 512(????????? ?????? ??????)</p>
                    <h2>89,000???</h2>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </StyledSection>
  );
};

export default FirstSection;
