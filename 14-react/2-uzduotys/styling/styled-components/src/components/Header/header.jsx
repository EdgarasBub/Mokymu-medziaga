import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  background-color: #ddc469;
  padding: 20px;
`;
const HeaderUl = styled.ul`
  display: flex;
  padding: 5px;
  list-style-type: none;
`;

const HeaderLi = styled.li`
  margin: 0 10px;
`;

const HeaderLiA = styled.a`
  text-decoration: underline;
  color: blue;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cf7bcf;
  padding: 20px;
  padding-right: 100px;
  padding-left: 100px;
`;

const CardConteiner = styled.div`
  display: flex;
  background-color: aliceblue;
  flex-wrap: wrap;
  margin: 0 auto;
`;
const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  margin: 50px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 24%;
`;

const BottomBannerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #efc428;
`;

const Header = () => {
  const cardData = [
    {
      id: 1,
      tittle: "Card 1",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni",
    },
    {
      id: 2,
      tittle: "Card 2",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni",
    },
    {
      id: 3,
      tittle: "Card 3",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni",
    },
    {
      id: 4,
      tittle: "Card 4",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni",
    },
    {
      id: 5,
      tittle: "Card 5",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni",
    },
    {
      id: 6,
      tittle: "Card 6",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni",
    },
  ];

  return (
    <div>
      <HeaderContainer>
        <h2>Projektas</h2>
        <HeaderUl>
          <HeaderLi>
            <HeaderLiA>nuoroda 1</HeaderLiA>
          </HeaderLi>
          <HeaderLi>
            <HeaderLiA>nuoroda 2</HeaderLiA>
          </HeaderLi>
          <HeaderLi>
            <HeaderLiA>nuoroda 3</HeaderLiA>
          </HeaderLi>
          <HeaderLi>
            <HeaderLiA>nuoroda 4</HeaderLiA>
          </HeaderLi>
          <HeaderLi>
            <HeaderLiA>nuoroda 5</HeaderLiA>
          </HeaderLi>
        </HeaderUl>
      </HeaderContainer>
      <BannerContainer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ducimus
        commodi fugiat, asperiores assumenda exercitationem iste quia error enim
        vero quidem architecto nobis qui cupiditate magni laudantium ea quod
        inventore?
      </BannerContainer>
      <CardConteiner>
        <Card>
          <h3>Card 1</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nisi
            sunt ut atque beatae. Incidunt error, aliquam distinctio sed id,
            unde rerum totam porro, quisquam minima sint vero inventore. Sit?
          </p>
        </Card>
        <Card>
          <h3>Card 2</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nisi
            sunt ut atque beatae. Incidunt error, aliquam distinctio sed id,
            unde rerum totam porro, quisquam minima sint vero inventore. Sit?
          </p>
        </Card>
        <Card>
          <h3>Card 3</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nisi
            sunt ut atque beatae. Incidunt error, aliquam distinctio sed id,
            unde rerum totam porro, quisquam minima sint vero inventore. Sit?
          </p>
        </Card>
        <Card>
          <h3>Card 4</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nisi
            sunt ut atque beatae. Incidunt error, aliquam distinctio sed id,
            unde rerum totam porro, quisquam minima sint vero inventore. Sit?
          </p>
        </Card>
        <Card>
          <h3>Card 5</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nisi
            sunt ut atque beatae. Incidunt error, aliquam distinctio sed id,
            unde rerum totam porro, quisquam minima sint vero inventore. Sit?
          </p>
        </Card>
        <Card>
          <h3>Card 6</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nisi
            sunt ut atque beatae. Incidunt error, aliquam distinctio sed id,
            unde rerum totam porro, quisquam minima sint vero inventore. Sit?
          </p>
        </Card>
      </CardConteiner>
      <BannerContainer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ducimus
        commodi fugiat, asperiores assumenda exercitationem iste quia error enim
        vero quidem architecto nobis qui cupiditate magni laudantium ea quod
        inventore?
      </BannerContainer>
      <BottomBannerContainer>
        <h3>Lorem 1</h3>
        <h3>Lorem 2</h3>
        <h3>Lorem 3</h3>
      </BottomBannerContainer>
    </div>
  );
};

export default Header;
