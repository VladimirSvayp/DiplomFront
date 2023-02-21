import React, { useState } from 'react';

import styles from './CatalogSort.module.scss';

const CatalogSort = ({ onSelectedSort }) => {
    const sorting = [
        'По цене (возрастание)',
        'По цене (убывание)',
        'По названию (а-я)',
        'По названию (я-а)',
    ];

    const [activeSort, setActiveSort] = useState('');

    return (
        <div className={styles.sortBy}>
            {sorting.map((elem, index) => (
                <button
                    key={index}
                    value={elem}
                    style={
                        activeSort === elem
                            ? {
                                  background: '#cacaca',
                                  borderRadius: '9px',
                                  padding: '5px 10px',
                                  border: '1px solid #000',
                                  cursor: 'pointer',
                              }
                            : {
                                  background: 'none',
                                  borderRadius: '9px',
                                  padding: '5px 10px',
                                  border: '1px solid #000',
                                  cursor: 'pointer',
                                  minWidth: '170px',
                              }
                    }
                    onClick={onSelectedSort}>
                    {elem}
                </button>
            ))}
        </div>
    );
};

export default CatalogSort;
