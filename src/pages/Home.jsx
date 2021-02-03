import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPizzas } from './redux/actions/pizzas';
import { Categories, SortPopup, PizzaBlock, PlaceholderBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
 
function Home() {

   const dispatch = useDispatch();
   const items  = useSelector(({ pizzas }) => pizzas.items);
   const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
   const { category, sortBy } = useSelector(({ filters }) => filters);  

   React.useEffect(() => {
      dispatch(fetchPizzas());
   }, [sortBy, category]);

 
   const onSelectCategory = React.useCallback((index) => {
      dispatch(setCategory(index));
   }, []);

   const onSelectSortType = React.useCallback((someType) => {
      dispatch(setSortBy(setSortBy));
   }, []);

   const sortItems = [
      { name: 'популярности', type: 'popular', order: 'desc'},
      { name: 'цене', type: 'price', order: 'asc' },
      { name: 'алфавит', type: 'alphabet', order: 'asc' },
   ];


    return (
        <div className="container">
         <div className="content__top">
            <Categories
               activeCategory={category}
               onClickCategory={onSelectCategory}
               items={categoryNames}
            />
            <SortPopup
               activeSortType={sortBy.type}
               items={sortItems}
               onClickSortType = {onSelectSortType}
            />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {isLoaded 

               ? items.map((obj) => <PizzaBlock isLoading={true} key={obj.id} {...obj} />)
               : Array(10).fill(0).map((_, index) => <PlaceholderBlock key={index}/>)
               
            }
         </div>
      </div>
    );
}

export default Home;
