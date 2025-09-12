import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  color: #d8bfbf; 
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #2482dbff;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 25px;                          /* 去掉左右 padding，让它和标题左对齐 */
  color: #e4e6e7;
  font-size: 1.7rem;
  line-height: 1.6;
  text-align: justify;
  text-justify: inter-word;
  word-break: normal;
  overflow-wrap: break-word;
  hyphens: auto;
  letter-spacing: 0.5px;
  margin: 0;                           /* 避免额外间距 */

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem 0;                 /* 小屏保留上下 padding */
    font-size: 1rem;
    line-height: 1.5;
  }
`;




export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #106ad1ff;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #eee6e6ff;

}
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;            /* 允许多行换行 */
  justify-content: space-around;
  padding: 2rem;
  gap: 1rem;                  /* 标签之间的间距（可选） */
  list-style: none;           /* 去掉 ul 默认的圆点（可选） */
  margin: 0;                  /* 去掉 ul 默认外边距（可选） */
`

export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`