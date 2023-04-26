import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import type Product from '../type/Product';

type FilterableProductTableProps = {
	products: Product[];
};

export default function FilterableProductTable({products}: FilterableProductTableProps) {
	// inStockOnly state�� �־�� �ϴ� ��
	
	return (
		<div>
			<SearchBar />
			<ProductTable products={products} />
		</div>
	);
}
