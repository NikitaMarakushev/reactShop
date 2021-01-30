import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components';
import { setCategory } from '../redux/actions/filters';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
 
function Home() {

   const dispatch = useDispatch();
   const { items } = useSelector(({ pizzas, filters}) => {
      return {
        items: pizzas.items,
      };
   });

   const onSelectCategory = React.useCallback((index) => {
      dispatch(setCategory(index));
   }, []);

   const sortItems = [
      { name: 'популярности', type: 'popular'},
      { name: 'цене', type: 'price' },
      { name: 'алфавит', type: 'alphabet' },
   ];


    return (
        <div className="container">
         <div className="content__top">
            <Categories
            onClickItem={onSelectCategory}
            items={categoryNames}
            />
            <SortPopup 
               items={sortItems} 
            />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {items && 
               items.map((obj) => (
               <PizzaBlock key={obj.id} {...obj} />
            ))}
         </div>
      </div>
    );
}

export default Home;
