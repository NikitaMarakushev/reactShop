import React from 'react';

import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ items, onClickCategory, activeCategory }) {

    return  (
        <div className="categories"> 
            <ul>
              <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)} >Все</li>
                {items && items.map((name, index) => (
                        <li
                            className={activeCategory === index ? 'active' : ''}
                            onClick={() => onClickCategory(index)}
                            key={`${name}_${index}`} 
                        >{name}</li>  
                    ))
                }
            
            </ul>
        </div>
    );
});

Categories.propTypes = {
    activeCategory: PropTypes.onOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClickCategory: propTypes.func.isRequired,
};

Categories.defaultProps = {
    activeCategory: null,
    items: []
};

export default Categories;