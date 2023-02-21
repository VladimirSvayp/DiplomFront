import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../..';
import styles from './CatalogList.module.scss';
import CatalogCard from '../CatalogCard/CatalogCard';

const CatalogList = observer(() => {
    const { product } = useContext(Context);

    return (
        <div className={styles.items}>
            {product.selectedProducts.map((item) => (
                <CatalogCard key={item.id} item={item} />
            ))}
        </div>
    );
});

export default CatalogList;
