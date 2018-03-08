import React from 'react';
import styled from 'styled-components';
import { GridList, GridTile, ThemeProvider } from '../src';

const Img = styled.img`
  object-fit: cover;
  width: 230px;
  height: 230px;
`;

const tilesData = [
  {
    img: 'https://media2.popsugar-assets.com/files/2016/02/08/898/n/1922398/4c2124bfd07afeca_heart-shaped-pizza-2016.xxxlarge_2x.jpg',
  },
  {
    img: 'https://www.livekindly.co/wp-content/uploads/2017/08/pizza-vegan-1280x640.jpg',
  },
  {
    img: 'https://www.the-girl-who-ate-everything.com/wp-content/uploads/2014/07/best-baked-beans-6.jpg',
  },
  {
    img: 'http://www.yaelyspizza.com/wp-content/uploads/2017/06/buffets-familiares-en-cdmx-carne-pizza-y-videojuegos-02.jpg',
  },
  {
    img: 'http://www.seriouseats.com/recipes/images/2017/02/20170216-detroit-style-pizza-43-1500x1125.jpg',
  },
  {
    img: 'https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/18691-ice-cream-cookie-pizza-600x600.jpg?ext=.jpg',
  },
  {
    img: 'https://www.pizzaparma.us/wp-content/uploads/2017/07/Pizza_Parma_Pittsburgh_Pizza_Dinner__Lunch_Caterin.jpg',
  },
  {
    img: 'https://nickpassey.com/wp-content/uploads/2016/10/Featured.jpg',
  },
];

const GridListsPage = ({ className }) => (
  <ThemeProvider theme={{ primary: '#03A9F4' }}>
    <div className={className}>
      <h1>Grid list</h1>
      <h3>Row</h3>
      <p>Gridlists default to flex-direction: row (and are responsive)</p>
      <GridList>
        {tilesData.map(tile => (
          <GridTile
            key={tile.img}
          >
            <Img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
      <h3>Column Grid</h3>
      <p>Change flex-direction to column by passing in "column"</p>

      <div height="200px">
        <GridList column>
          {tilesData.map(tile => (
            <GridTile
              key={tile.img}
            >
              <Img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>

    </div>
  </ThemeProvider>
);

const StyledGridListsPage = styled(GridListsPage)`
  padding: 25px;
  width: 100%;
  height: 100%;
`;

export default StyledGridListsPage;
