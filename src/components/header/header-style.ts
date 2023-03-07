import { pageFormat } from "../../ui/styles/page-format";
import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 100px;
  box-shadow: -4px 0px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: -4px 0px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: -4px 0px 5px 0px rgba(0,0,0,0.75);
  background-color: #F4F4F4;
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: blue; */
    height: 100px;
    ${pageFormat}
    &-left{
      height: 70px;
      img{
        height: 100%;
      }
    }
    &-right--navbar{
      display: flex;
      &__item{
        margin-right: 12px;
        &:last-child{
          margin-right: 0;
        }
      }
    }
  }
`