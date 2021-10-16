import React from 'react';

const ShowProducts = ({ filteredProducts }) => {

  const a = filteredProducts;

  let counts = {}
  function count_duplicate(a) {

    for (let i = 0; i < a.length; i++) {

      if (counts[`${a[i].name}`]) {

        counts[a[i].name] += 1
      } else {
        counts[a[i].name] = 1
      }
    }


  }
  count_duplicate(a);


  return (
    <div className="container">
      {
        (filteredProducts[0]) ?
          <div className="products">
            <div className="title">
              <div className="title-category">
                <span className="title-category-name">{filteredProducts[0].category.toUpperCase()}</span>
                <span className="title-category-length">{filteredProducts.length}</span>
              </div>
            </div>
            <div className="products-list">
              <div className="title-products">
                <span>نام محصول</span>
              </div>
              <div className="products-total">
                <span>تعداد موجود</span>
              </div>
              <div className="products-name">
                {
                  Object.keys(counts).map((p) => (
                    <li className="products-items" key={filteredProducts.id}>
                      <span>{p}</span>
                    </li>
                  ))
                }
              </div>
              <div className="products-length">
                {
                  Object.keys(counts).map((p) => (
                    <li className="products-items" key={filteredProducts.id}>
                      <span>{counts[p]}</span>
                    </li>
                  ))
                }
              </div>

            </div>

          </div> : (<h1>سبد محصولات خالی است</h1>)
      }
    </div>
  );
}

export default ShowProducts;