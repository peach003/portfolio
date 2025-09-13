import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

// ===== 容器：三部分底部对齐 =====
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 2rem 2rem 0;
  align-items: end;

  /* ⭐ 新增：控制整体宽度和居中 */
  max-width: 1100px;   /* 要和 Hero 一致 */
  box-sizing: border-box;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 1.5rem 1rem 0;
    grid-column-gap: 1rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    align-items: center;
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    padding: 0.5rem;
    gap: 0.8rem;
  }
`;


// ===== 左侧 Logo =====
export const Div1 = styled.div`
  grid-area: 1/ 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-bottom: 4px; /* ✅ 微调，让基线一致 */

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: unset;
    justify-content: center;
    padding-bottom: 0;
  }
`;

// ===== 中间菜单 =====
export const Div2 = styled.ul`
  grid-area: 1/ 4 / 4 / 5;
  display: flex;
  justify-content: flex-end; /* ✅ 靠右 */
  align-items: flex-end;
  list-style: none;
  gap: 8rem;
  margin: 0;
  padding: 0;
  padding-bottom: 4px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    gap: 7.5rem;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    gap: 7rem;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    gap: 5.5rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: unset;
    justify-content: center;
    gap: 1.5rem;
    margin-right: 0;
    flex-wrap: wrap;
    padding-bottom: 0;
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    gap: 1rem;
  }
`;



// ===== 菜单链接 =====
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  white-space: nowrap;

  &:hover {
    color: #1a85e9ff;
    opacity: 1;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.8rem;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
    line-height: 20px;
    padding: 0.3rem 0.5rem;
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    font-size: 1.2rem;
    line-height: 18px;
    padding: 0.2rem 0.3rem;
  }
`;

// ===== 社交图标 =====
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

